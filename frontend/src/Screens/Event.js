import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Button } from 'react-native';
import * as ActionTypes from '../Actions/ActionTypes'

import { Actions } from 'react-native-router-flux'; 
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  store from './../Reducers/index';
class Event extends Component {
	constructor(props) {
		super(props);
			this.state = {
					event: store.getState().event.event,
					selected: store.getState().event.selected
			}
	}
	render() {
			return (
			<View>
			<Text>{this.state.event.event.name}</Text>
			</View>
			);
		}
  }
  

const styles = StyleSheet.create ({
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

export default connect(({routes}) => ({routes}))(Event)