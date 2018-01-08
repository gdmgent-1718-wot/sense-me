import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import EventList from '../Actions/Events/EventActions';
import Header from '../Components/Header/index';

class Events extends Component {
  render() {
    return (
      <View>
				<Header/>
				<EventList/>
      </View>
    );
  }
}

export default Events;