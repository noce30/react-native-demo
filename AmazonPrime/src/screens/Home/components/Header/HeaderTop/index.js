import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { styles } from '../styles';
import Right from './Right';
import Left from './Left';

export default class HeaderTop extends Component {
  render() {
    return (
      <View style={styles.headerTop}>
        <Right/>
        <Left/>
      </View>
    );
  }
}
