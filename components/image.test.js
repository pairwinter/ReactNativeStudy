/**
 * Created by damon on 04/01/2017.
 */
import React, {Component, Proptypes} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native'

export default class TestImage extends Component{

    constructor(props){
        super(props);

        this.state = {

        }

    }

    render(){
        return (
            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                <Image source={require('../images/bear.png')}/>
                <Image source={require('../images/bear.png')}>
                    <Text style={{backgroundColor: 'transparent'}}>Background Image</Text>
                    <Text style={{backgroundColor: 'transparent'}}>Background Image</Text>
                </Image>
            </View>
        )
    }

}