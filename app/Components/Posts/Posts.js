/**
 * Created by ananyagoel on 14/07/17.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
    Image,
    Picker,
    Slider
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import HeaderBar from '../HeaderBar/HeaderBar'


export default class Posts extends Component {

    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!==r2})
        this.state={
            category:'food',
            limit:5,
            postDataSource :ds
        }
        this.pressRow= this.pressRow.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }
    componentDidMount(){
        this.fetchPosts()
    }

    renderRow(post){
        console.log("here in rederrow");
        let image;
        try {
            if(typeof post.data.preview.images[0].source.url == undefined){
                image=<Text></Text>
            }else {
                image=<Image style={styles.thumb} source={{uri : post.data.preview.images[0].source.url}}/>
            }
        }catch(e){
            console.log(e)
        }
        return(
            <TouchableHighlight onPress={()=>{
                this.pressRow(post)
            }}>
                <View style={styles.row}>
                    {image}
                    <Text style={styles.textrow}>
                        {post.data.title}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }


    pressRow(post){
        Actions.Details(post)

    }


    fetchPosts(){
        fetch('https://reddit.com/r/'+this.state.category+'/top.json?limit='+this.state.limit)
            .then((response)=>response.json())
            .then((response)=>{
                let posts = response.data.children;
                console.log(posts)
                this.setState({
                    postDataSource:this.state.postDataSource.cloneWithRows(posts)
                })
            })
    }

    changeCategory(value){
        this.setState({category:value},() => {this.fetchPosts()})
    }

    changeLimit(value){
        this.setState({limit:value},() => {this.fetchPosts()})

    }

    render(){
        return(
            <View style={styles.outer}>
                <HeaderBar />
                <Picker
                selectedValue={this.state.category}
                onValueChange={(value)=> this.changeCategory(value)}>
                    <Picker.Item label="Food" value="food"/>
                    <Picker.Item label="Sports" value="sports"/>
                    <Picker.Item label="Books" value="books"/>
                    <Picker.Item label="Funny" value="funny"/>
                    <Picker.Item label="Puns" value="puns"/>

                </Picker>
                <Slider minimumValue={5}
                maximumValue={25}
                step={5}
                value={this.state.limit}
                onValueChange={(value) => this.changeLimit(value)}>

                </Slider >
                <ListView
                    dataSource={this.state.postDataSource}
                    renderRow={this.renderRow} />
            </View>
        )
    }
}

const styles= StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'center',
        padding:12,
        backgroundColor:'#f6f6f6',
        marginBottom:3
    },
    textrow:{
        flex:3
    },
    outer:{
        marginTop:20
    },
    thumb:{
        flex:1,
        height:60,
        width:60,
        margin:4

    }
})