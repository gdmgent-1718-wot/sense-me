import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Sense from '../Screens/Sense';
import Docenten from '../Screens/Docenten';
import Events from '../Screens/Events';
import Event from '../Screens/Event';
import Profiel from '../Screens/Profiel';

const Stack = () => {
  return (
    <Router>
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
              component={Sense}
            />
            <Scene
              key="docenten"
              component={Docenten}
            />
            <Scene key="events" navTransparent={true}>
              <Scene
                key="events"
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
}


export default Stack;



const App = () => {
    return (
      <Router>
        <Scene key="root">
          {/* Tab Container */}
          <Scene
            key="tabbar"
            tabs={true}
            tabBarStyle={{ backgroundColor: '#FFFFFF' }}
          >
            {/* Tab and it's scenes */}
            <Scene key="osu" title="OSU" icon={TabIcon}>
              <Scene
                key="scarlet"
                component={ScarletScreen}
                title="Scarlet"
              />
              <Scene
                key="gray"
                component={GrayScreen}
                title="Gray"
              />
            </Scene>
  
            {/* Tab and it's scenes */}
            <Scene key="um" title="UM" icon={TabIcon}>
              <Scene
                key="blue"
                component={BlueScreen}
                title="Blue"
              />
              <Scene
                key="maize"
                component={MaizeScreen}
                title="Maize"
              />
            </Scene>
  
            {/* Tab and it's scenes */}
            <Scene key="vu" title="VU" icon={TabIcon}>
              <Scene
                key="gold"
                component={GoldScreen}
                title="Gold"
              />
              <Scene
                key="black"
                component={BlackScreen}
                title="Black"
              />
            </Scene>
          </Scene>
  
          <Scene
            key="modal"
            direction="vertical"
            component={ModalScreen}
            title="Modal"
            hideNavBar
          />
        </Scene>
      </Router>
    );
  }