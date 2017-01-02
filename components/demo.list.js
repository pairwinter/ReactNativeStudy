/**
 * Created by damon on 02/01/2017.
 */
import React, {Component, PropTypes} from 'react';
import Dimensions from 'Dimensions';
import {StyleSheet, View, ListView, Text, TouchableHighlight} from 'react-native'

import TestTextInput from './textinput.test';
import TestTabBarIOS from './tabbarios.test'


const style = StyleSheet.create({
    list:{
        flex:1,
        padding: 10
    }
});

export default class RNDemoList extends Component{

    constructor(props){
        super(props);

        const demos = new ListView.DataSource({
            rowHasChanged: (row1, row2) => { row1 !== row2 }
        });

        this.state = {
            // demos: demos.cloneWithRows({
            //     INPUT:[
            //         {
            //             id: 1,
            //             name: 'TextInput',
            //             component: 'TestTextInput'
            //         }
            //     ]
            // }),
            demos: demos.cloneWithRows([
                {
                    id: 1,
                    name: 'TextInput',
                    component: TestTextInput
                },
                {
                    id: 2,
                    name: 'TabBarIOS',
                    component: TestTabBarIOS
                }

            ])
        }
    }

    showDemo(component){
        this.props.navigator.push({
            title: 'TextInput Demo',
            component:component
        });
    }
    
    render(){
        return (
            <ListView
                style={style.list}
                dataSource={this.state.demos}
                renderRow={(rowData) =>
                    <TouchableHighlight onPress={this.showDemo.bind(this, rowData.component)} style={{padding:5}}>
                        <Text>{rowData.name}</Text>
                    </TouchableHighlight>
                }
            />
        )
    }

}
