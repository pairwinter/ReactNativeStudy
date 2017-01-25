/**
 * Created by damon on 15/01/2017.
 */

import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Image, Animated} from 'react-native';
import Dimensions from 'Dimensions';

let { width, height} = Dimensions.get('window');


export default class TestAnimated extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0.5)
        };
    }

    componentDidMount() {
        this.state.bounceValue.setValue(1.5);
        Animated.spring(this.state.bounceValue, {
            toValue: 1,
            friction: 1
        }).start();
    }

    render() {
        return (
            <View style={{
                flex: 1,
                width: width
            }}>
                <Animated.Image
                    source={require('../images/bear.png')}
                    style={{
                    flex: 1,
                    width: width,
                    transform:[
                        {
                            scale: this.state.bounceValue
                        }
                    ]
                }}
                />
                <Image
                    source={require('../images/bear.png')}
                    style={{
                        flex: 1,
                        width: width
                    }}
                />
            </View>

        )
    }
}

