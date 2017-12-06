import React from 'react';
import  { TabNavigator } from 'react-navigation';

import Sense from '../screens/sense';
import Docenten from '../screens/docenten';
import Events from '../screens/events';
import Profiel from '../screens/profiel';

const Tabs = TabNavigator ({
    Sense: {
        screen: Sense,
    },
    Docenten : {
        screen: Docenten,
    },
    Events : {
        screen: Events,
    },
    Profiel : {
        screen: Profiel,
    }
}, {
    tabBarOptions: {
        showIcon: 'false',
        labelStyle: {
            fontSize: 20,
            textAlign: 'center',
          },
        activeTintColor: 'white',
        activeBackgroundColor: '#FFA734',
        inactiveTintColor: 'white',
        inactiveBackgroundColor: '#2B98D4',
      },
});
  
export default Tabs;