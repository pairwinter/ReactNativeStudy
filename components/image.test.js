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

import Dimensions from 'Dimensions';

let {width, height} = Dimensions.get('window');

export default class TestImage extends Component{

    constructor(props){
        super(props);

        this.state = {

        }

    }

    render(){
        return (
            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                <Image source={require('../images/bear.png')} style={{flex: 1, width: width}}/>
                <Image source={require('../images/bear.png')} style={{flex: 1, width: width}}>
                    <Text style={{backgroundColor: 'transparent'}}>Background Image</Text>
                    <Text style={{backgroundColor: 'transparent'}}>Background Image</Text>
                </Image>
            </View>
        )
    }

}