import React, {Component} from 'react';
import {
    AppRegistry,
    Navigator
} from 'react-native';

import MyScene from './components/my.scene'

import ViewText from './components/my.view.text'

export default class ReactNativeStudy extends Component {
    render() {
        return (
            <Navigator initialRoute={{title:'My Initial Scene', index:0}}
                       renderScene={(route, navigator) => {
                return <MyScene title={route.title} onForward={() => {
                    const nextIndex = route.index + 1;
                    navigator.push({
                        title: `Scene ${nextIndex}`,
                        index: nextIndex
                    })
                }} onBackward={()=>{
                    if(route.index > 0){
                        navigator.pop();
                    }
                }} goToWhere={() => {
                    let allRoutes = navigator.getCurrentRoutes();
                    var nextIndex = Math.floor(Math.random()*allRoutes.length);
                    console.log(nextIndex,allRoutes[nextIndex]);
                    navigator.jumpTo(allRoutes[nextIndex])
                }}/>
            }}
            />
        );
    }
}


AppRegistry.registerComponent('ReactNativeStudy', () => ReactNativeStudy);