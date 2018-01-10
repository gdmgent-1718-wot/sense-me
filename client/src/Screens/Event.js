import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../Components/Header/index';
import EventDetail from '../Components/EventList/EventDetail';

class Event extends Component {
  render() {
    return (
      <View>
		    <Header/>
        <EventDetail />
      </View>
    );
  }
}

export default Event;