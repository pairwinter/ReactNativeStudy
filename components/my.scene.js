import React, {Component, PropTypes} from 'react';
import Dimensions from 'Dimensions'
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';

var {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cccccc',
    },
    container_content:{
        flex: 1,
        width:width,
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#FFD1B9'
    },
    container_operators:{
        flex: 1,
        width:width,
        flexDirection:'row',
        // flexDirection:'column',
        // justifyContent:'flex-start',
        // justifyContent:'center',
        // justifyContent:'flex-end',
        justifyContent:'space-around',
        // justifyContent:'space-between',
        // alignItems:'flex-start',
        alignItems:'center',
        // alignItems:'flex-end',
        // alignItems:'stretch',
        backgroundColor:'#EDAEFF'
    },
    text: {
        fontSize: 30,
        margin: 20,
        textAlign: 'center'
    }
});

export default class MyScene extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container_content}>
                    <Text style={styles.text}>Hi My name is {this.props.title}.</Text>
                </View>
                <View style={styles.container_operators}>
                    <TouchableHighlight onPress={this.props.onForward}>
                        <Text>Go Forward</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.props.onBackward}>
                        <Text>Go Back</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.props.goToWhere}>
                        <Text>Go To ...</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

MyScene.propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBackward: PropTypes.func.isRequired,
    goToWhere: PropTypes.func.isRequired
};