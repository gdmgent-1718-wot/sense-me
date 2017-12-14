import React, { Component } from 'react';
import {  Platform, View } from 'react-native';
// API IMPORTS
import { Provider } from 'react-redux';
import store from './src/Reducers/index';
// HEADER AND TAPBAR
import Header from './src/Components/Header/index';
import Stack from './src/Config/Router';
export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
      <View style={{flex: 1}}>
        <Header/>
        <Stack/>
      </View>
      </Provider>
    );
  }
}



