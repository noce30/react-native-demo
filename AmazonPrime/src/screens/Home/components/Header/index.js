import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { styles } from './styles';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

export default class Header extends Component {
  render() {
    return (
      <View style ={styles.container}>
        <HeaderTop/>
        <HeaderBottom onQueryItems={this.props.onQueryItems}/>
      </View>
    );
  }
}

