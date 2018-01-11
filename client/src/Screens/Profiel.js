import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Test from '../Actions/Login/authActions';

class Profiel extends Component {
  render() {
    return(
      <View>
        <Text>welkom</Text>
        <Test/>
      </View>
    );
  }
}

export default Profiel;