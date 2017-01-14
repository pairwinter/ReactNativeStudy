/**
 * Created by damon on 04/01/2017.
 */
import React, {Component, Proptypes} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar} from 'react-native-scrollable-tab-view'

import TestTextInput from './textinput.test';
import TestTabBarIOS from './tabbarios.test';
import TestImage from './image.test';

export default class TestScrollableTabView extends Component{

    constructor(props){
        super(props);

        this.state = {

        }

    }

    render(){
        return (
            <ScrollableTabView
                style={{marginTop: 20, }}
                initialPage={2}
                renderTabBar={() => <ScrollableTabBar />}
            >
                <TestTextInput tabLabel="TestTextInput" />
                <TestTabBarIOS tabLabel="TestTabBarIOS" />
                <TestImage tabLabel="TestImage" />
            </ScrollableTabView>
        )
    }

}