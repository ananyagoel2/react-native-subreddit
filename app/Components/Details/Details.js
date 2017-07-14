/**
 * Created by ananyagoel on 14/07/17.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';

import HeaderBar from '../HeaderBar/HeaderBar';


import {Actions} from 'react-native-router-flux';



export default class Details extends Component {

    constructor(props){
        super(props);

        // Actions.refresh({title:this.props.data.title});

        console.log("here in rederrow");
        let image;
        try {
            if(typeof props.data.preview.images[0].source.url == undefined){
                image=''
            }else {
                image= this.props.data.preview.images[0].source.url;
            }
        }catch(e){
            console.log(e)
        }

        this.state={
            title:this.props.data.title,
            score:this.props.data.score,
            comments:this.props.data.num_comments,
            image:image
        }
    }


    render() {
        return (
            <View style={styles.outer}>
                <HeaderBar title={this.props.data.title}/>
                <Text style={styles.stats}>
                   Score: {this.state.score} | Comments:{this.state.comments}
                    </Text>
                <Image style={styles.image} source={{uri:this.state.image}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    stats:{
        textAlign:'center',
        padding:4,
        backgroundColor:'#333',
        color:'#fff',

    },
    outer:{
        marginTop:20
    },
    image:{
        width:Dimensions.width,
        height:200
    },
    bar:{
        backgroundColor:'coral'}

});
