import React, { Component } from 'react';
import ReactNativeRouter, { Actions, Router, Scene, Reducer } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Colors from './Theme';
import Sense from '../Screens/Sense';
import Docenten from '../Screens/Docenten';
import Events from '../Screens/Events';
import Event from '../Screens/Event';
import Profiel from '../Screens/Profiel';

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

const navigator = () => (
  <Router
  createReducer={reducerCreate}
  >
  <Scene key="root"
      tabBarPosition='bottom'>
  <Scene 
    key="tabbar"
    tabs={true}
    hideNavBar={true}
    swipeEnabled={false}
    activeBackgroundColor={Colors.orange}
    activeTintColor={Colors.darkgrey}
    labelStyle={{flex: 1, alignSelf: 'center', fontSize: 12, marginBottom: 15, color: Colors.white}}
    tabBarStyle={{  backgroundColor: Colors.mediumBlue }}>
    {/* Tab and it's scenes */}
      <Scene
        key="sense"
        initial={true}
        component={Sense}
      />
      <Scene
        key="docenten"
        component={Docenten}
      />
      <Scene key="events" navTransparent={true}>
        <Scene
          key="allevents"
          component={Events}
        />
        <Scene
          back={true}
          init={false}
          key="event"
          title='Terug naar evenementen'
          component={Event}
        />
      </Scene>
      <Scene
        key="profiel"
        component={Profiel}
      />
  </Scene>
  </Scene>
  </Router>
);
export default navigator;