import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default class ViewText extends Component{

  static defaultProps = {
    title: 'Damon\'s Scene'
  };

    constructor(props){
        super(props);
        this.state = {
            name: 'Mandy'
        }
    }

    updateName(){
        this.setState({name: 'Damon'})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.updateName.bind(this)}>
                    Welcome to React Native! Damon2 - {this.state.name}
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});