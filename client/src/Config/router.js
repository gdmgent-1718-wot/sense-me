import React, { Component } from 'react';
import ReactNativeRouter, { Actions, Router, Scene, Reducer } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Colors from './theme';

import Sense from '../Screens/Sense';
import Profiel from '../Screens/Profiel';
import Login from '../Screens/Login';
import Docenten from '../Screens/Docenten';
import Events from '../Screens/Events';
import Event from '../Screens/Event';
import Chat from '../Screens/Chat';


const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    return defaultReducer(state, action);
  };
};

const navigator = () => (
  <Router createReducer={reducerCreate}>
    <Scene key="root" tabBarPosition='bottom'>

      {/*<Scene initial={true} key="login" component={Login} hideNavBar={true}/>*/}

      <Scene 
      key="tabbar"
      tabs={true}
      hideNavBar={true}
      swipeEnabled={false}
      activeBackgroundColor={Colors.orange}
      activeTintColor={Colors.darkgrey}
      labelStyle={{flex: 1, alignSelf: 'center', fontSize: 12, marginBottom: 15, color: Colors.white}}
      tabBarStyle={{  backgroundColor:Colors.mediumBlue}}>

        <Scene key="sense" component={Sense} />

        <Scene key="docenten" navTransparent={true}>
          <Scene key="docenten" component={Docenten} />
          <Scene back={true} key="chat" component={Chat} />
        </Scene>

        <Scene key="events" navTransparent={true}>
          <Scene key="allevents" component={Events}/>
          <Scene back={true} init={false} key="event" title='Terug naar evenementen' component={Event}/>
        </Scene>
        
        <Scene key="profiel" component={Profiel}/>
        
      </Scene>
    </Scene>
  </Router>
);
export default navigator;