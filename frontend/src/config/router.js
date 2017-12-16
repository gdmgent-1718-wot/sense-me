import React, { Component } from 'react';
import ReactNativeRouter, { Actions, Router, Scene, Reducer } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Sense from '../Screens/Sense';
import Docenten from '../Screens/Docenten';
import Events from '../Screens/Events';
import Event from '../Screens/Event';
import Profiel from '../Screens/Profiel';

export const navigator = Actions.create(
  <Scene key="root"
tabBarPosition={'bottom'}>
{/*TAB CONTAINER*/}
  <Scene 
    key="tabbar"
    tabs={true}
    hideNavBar={true}
    swipeEnabled={false}
    activeBackgroundColor={'#FFA734'}
    activeTintColor={'#2B98D4'}
    labelStyle={{flex: 1, alignSelf: 'center', fontSize: 12, marginBottom: 15, color: '#FFF'}}
    tabBarStyle={{  backgroundColor: '#2B98D4' }}>

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
</Scene>);
