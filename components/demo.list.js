/**
 * Created by damon on 02/01/2017.
 */
import React, {Component, PropTypes} from 'react';
import Dimensions from 'Dimensions';
import {StyleSheet, View, ListView, Text, TouchableHighlight} from 'react-native'

import TestTextInput from './textinput.test';
import TestTabBarIOS from './tabbarios.test';
import TestImage from './image.test';
import TestScrollableTabView from './scrollable.tab.view.test';
import TestAnimated from './animated.test';


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
                },
                {
                    id: 3,
                    name: 'TestImage',
                    component: TestImage
                },
                {
                    id: 4,
                    name: 'TestScrollableTabView',
                    component: TestScrollableTabView
                },
                {
                    id: 5,
                    name: 'TestAnimated',
                    component: TestAnimated
                }

            ])
        }
    }

    showDemo(name, component){
        this.props.navigator.push({
            title: name + ' Demo',
            component:component
        });
    }
    
    render(){
        return (
            <ListView
                style={style.list}
                dataSource={this.state.demos}
                renderRow={(rowData) =>
                    <TouchableHighlight onPress={this.showDemo.bind(this,rowData.name, rowData.component)} style={{padding:5}} underlayColor="#ccc">
                        <Text>{rowData.name}</Text>
                    </TouchableHighlight>
                }
            />
        )
    }

}
