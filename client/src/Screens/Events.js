import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../Components/Header/index';
import EventList from '../Actions/Events/eventActions';

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