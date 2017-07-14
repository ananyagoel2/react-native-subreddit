/**
 * Created by ananyagoel on 14/07/17.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class HeaderBar extends Component {

    static defaultProps={
        title:'MobileTodos'
    }
    render() {
        return (
            <View style={styles.bar}>
                <Text style={styles.text}>
                    {this.props.title}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
bar:{
    backgroundColor:'coral',
    padding:15
},
    text:{
    color:'white',
        fontSize:15,
        textAlign:'center'
    },

});
