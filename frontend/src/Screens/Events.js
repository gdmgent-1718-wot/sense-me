import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet, Button
} from 'react-native';

import ServiceAction from '../Actions/EventActions';
import { Actions } from 'react-native-router-flux';
import PropType from 'prop-types';
import { connect } from 'react-redux';

export default  Events = () => {
  return (
		<View style={style.container}>
		<ServiceAction />
    </View>
  )
}

const style = StyleSheet.create ({
    container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	statusText: {
		fontSize: 40,
		fontWeight: 'bold',
		marginTop: 60,
		textAlign: 'center',
		color: 'black',
		backgroundColor: 'rgba(0,0,0,0)',
	}
})