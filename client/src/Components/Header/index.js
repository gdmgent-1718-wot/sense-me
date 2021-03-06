import React, { Component } from 'react';
import { Text, View, StyleSheet,  Image } from 'react-native';
import Colors from '../../Config/theme';

const logo = require('../../../assets/logo_reverse.png');

const Header = (props) => (
    <View style={style.container}>
        <Image source={logo} style={style.logo} />
    </View>
)

const style = StyleSheet.create ({
    container: {
        height: 80,
        alignItems: 'center',
        backgroundColor: Colors.mediumBlue,
      },
      logo : {
        marginTop: 30,
        width: 30,
        height: 30,
      }
})

export default Header;
