import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Button } from 'react-native';
// SERVICE ACTION IS CALL API
import ServiceAction from '../Actions/CallAllEvents';
import { Actions } from 'react-native-router-flux'; // New code

const Events = ({props}) => (
	<View style={style.container}>
	<Text
		onPress={() => Actions.event()} // New Code
	>
	Scarlet Screen
</Text>
	<ServiceAction />
  </View>
)
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

export default Events;