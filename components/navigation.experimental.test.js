/**
 * Created by damon on 16/01/2017.
 */

import React, {Component} from 'react';

import {TouchableHighlight, ScrollView, View, Text, NavigationExperimental} from 'react-native';

const {
    CardStack: NavigationCardStack,
    StateUtils: NavigationStateUtils
} = NavigationExperimental;

class TappableRow extends Component{
    render(){
        return (
            <TouchableHighlight>
                <Text style=""/>
            </TouchableHighlight>
        )
    }
}

class BleedingEdgeApplication extends Component {
    constructor(props, context) {
        this.state = {
            navigationState: {
                index: 0,
                routes: [{
                    key: 'My Initial Scene'
                }]
            }
        }
    }

    _onNavigationChange(type) {
        let {navigationState} = this.state;
        switch(type){
            case 'push':
                const route = {
                    key: 'Route' + Date.now()
                };
                navigationState = StateUtils.push(navigationState, route);
                break;
            case 'pop':
                navigationState = StateUtils.pop(navigationState);
                break;
        }

        if(this.state.navigationState !== navigationState){
            this.setState({navigationState});
        }
    }

    render() {
        return (
            <Text>My Initial Scene</Text>
        )
    }
}

