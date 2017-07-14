

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Router, Scene , Modal } from 'react-native-router-flux';

import Posts from './app/Components/Posts/Posts';


export default class subreddits extends Component {
    render() {
        return (
            <Router>
              <Scene key="modal" component={Modal} >
                <Scene key="root">
                  <Scene key="Posts" component={Posts} direction="vertical" initial={true} hideNavBar={true}/>
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
