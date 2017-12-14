import React, { Component } from 'react';
import { Text, View, StyleSheet,  Image } from 'react-native';

const logo = require('../../../assets/logo_reverse.png');
const Header = (props) => (
    <View style={style.container}>
        <Image source={logo} style={style.logo} />
    </View>
)

const style = StyleSheet.create ({
    container: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B98D4',
      },
      logo : {
        width: 30,
        height: 30,
      }
})

export default Header;
