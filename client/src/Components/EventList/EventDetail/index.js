import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Button, Image } from 'react-native';
// Import action types
import * as ActionTypes from '../../../Actions/ActionTypes';
// Connect to the actions.
import { connect } from 'react-redux';
// Connect to the store for our props. 
import  store from '../../../Reducers/index';
// Format date
import moment from 'moment';
import 'moment/locale/nl-be';

import Colors from '../../../Config/theme';

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
	},
	photo: {
		marginTop: 60,
        minHeight: 150,
        alignSelf: 'stretch',
        backgroundColor: '#000000'
	},
	banner: {
		flexDirection: 'row',
		backgroundColor: Colors.darkgrey,
		padding: 6,
		paddingLeft: 15,
	},
	time: {
		color: Colors.white

	},
	date: {
		color: Colors.white,
		marginRight: 10,
	},
	content: {
		padding: 15
	},
	title: {
		fontSize: 17,
		marginBottom: 5,
		fontWeight: '700'
	},
	description: {
		fontSize: 15
	}
});
  


export default connect(({routes}) => ({routes}))(EventDetail)