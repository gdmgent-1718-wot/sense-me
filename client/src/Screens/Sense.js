import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../Components/Header/index';
import Search from '../Components/Search/index';

class Sense extends Component {
  render() {
    return(
      <View>
        <Header/>
        <Search/>
      </View>
    );
  }
}

export default Sense;