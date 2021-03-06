

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    BackAndroid,
    ToastAndroid
} from 'react-native';

import { Router, Scene , Modal , Actions} from 'react-native-router-flux';

import Posts from './app/Components/Posts/Posts';
import Details from './app/Components/Details/Details';

export default class subreddits extends Component {
    render() {
        BackAndroid.addEventListener('hardwareBackPress', () => {
            try {
                Actions.pop();
                return true;
            }
            catch (err) {
                ToastAndroid.show("Cannot pop. Exiting the app...", ToastAndroid.SHORT);
                return true;
            }
        });
        return (
            <Router>
                <Scene key="modal" component={Modal} >
                    <Scene key="root">
                        <Scene key="Posts" component={Posts} direction="vertical" initial={true} hideNavBar={true}/>
                        <Scene key="Details" component={Details} direction="vertical"  hideNavBar={true}/>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('subreddits', () => subreddits);
