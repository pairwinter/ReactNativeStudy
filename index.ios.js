/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Navigator,
    NavigatorIOS
} from 'react-native';

import MyScene from './components/my.scene'

import ViewText from './components/my.view.text'

import RNDemoList from './components/demo.list'

export default class ReactNativeStudy extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{title: 'Demos List', component: RNDemoList}}
                style={{flex: 1}}
                barTintColor='#C8FDFF'
                renderScene={(route, navigator) => {
                    let RouteComponent = route.component;
                    return <RouteComponent navigator={navigator}/>
                }}
            />
        );
    }
}


AppRegistry.registerComponent('ReactNativeStudy', () => ReactNativeStudy);
