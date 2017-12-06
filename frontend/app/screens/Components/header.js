import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const Header = (props) => (
    <View style={style.container}>
    </View>
)

const style = StyleSheet.create ({
    container: {
		flex: 1,
		justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        backgroundColor: '#2B98D4',
	},
})

export default Header;