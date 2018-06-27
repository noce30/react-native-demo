import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import Icon from 'react-native-fa-icons';

export default class Left extends Component {
  render() {
    return (
      <View>
        <Text> 
        <Icon name='bell-o' style={{ fontSize: 30, color: 'white'}} />
        <Icon name='shopping-cart' style={{ fontSize: 30, color: 'white'}} />
        </Text>
      </View>
    );
  }
}
