/**
 * Created by damon on 02/01/2017.
 */
import React, {Component, PropTypes} from 'react';
import Dimensions from 'Dimensions';
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native'

var {width, height} = Dimensions.get('window');

export default class TestTextInput extends Component{

    constructor(props){
        super(props);
        this.state = {
            text: 'Waiting for input!'
        }
    }

    eventOnChangeText(text){
        this.setState({
            text: text || 'Waiting for input!'
        })
    }

    render(){
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                <View style={{justifyContent: 'center', alignItems:'center', borderWidth:1, height:35,borderColor:"#ccc", padding:5, borderRadius:5}}>
                    <TextInput
                        style={{justifyContent:'center',alignItems:'center', height: 40, width: 200}}
                        placeholder="Waiting for input!"
                        onChangeText={this.eventOnChangeText.bind(this)}/>
                </View>
                <Text>{this.state.text}</Text>
            </View>

        )
    }

}
