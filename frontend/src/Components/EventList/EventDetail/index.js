import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Button, Image } from 'react-native';
// Import action types
import * as ActionTypes from '../../../Actions/ActionTypes';
// Import styles
import styles from './style';
// Connect to the actions.
import { connect } from 'react-redux';
// Connect to the store for our props. 
import  store from './../../../Reducers/Index';
// Format date
import moment from 'moment';
import 'moment/locale/nl-be';
class EventDetail extends Component {
	constructor(props) {
		super(props);
        // Set the locale.
        moment.locale('nl-be');
        // Get state.
		this.state = {
			event: store.getState().event.event,
			selected: store.getState().event.selected
		}
	}

    componentWillReceiveProps(nextProps) {
        console.log("NEXT PROPS", nextProps);
        if (nextProps.data != null) {
           console.log(nextProps);
        }
    }
	render() {
			return (
			<View>
			<Image source={{ uri: this.state.event.event.src }} style={styles.photo}/>
				<View style={styles.banner}>
					<Text style={styles.date}>{moment(this.state.event.event.date).format('DD.MM.YYYY')}</Text>
					<Text style={styles.time}>{this.state.event.event.start} - {this.state.event.event.stop}</Text>
				</View>
				<View style={styles.content}>
					<Text style={styles.title}>{this.state.event.event.name}</Text>
					<Text style={styles.description}>{this.state.event.event.description}</Text>
				</View>
			</View>
			);
		}
  }
  


export default connect(({routes}) => ({routes}))(EventDetail)