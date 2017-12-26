import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet, Button
} from 'react-native';

import EventDetail from '../Components/EventList/EventDetail';
import { Actions } from 'react-native-router-flux';
import PropType from 'prop-types';
import { connect } from 'react-redux';

export default  Event = () => {
  return (
		<View style={style.container}>
		<EventDetail />
    </View>
  )
}

const style = StyleSheet.create ({
    container: {
		flex: 1,
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