import React, { Component } from 'react';
import { 
  Platform,
  View,
  Image,
  StyleSheet
} from 'react-native';

import Tabs from './app/config/router';
import Sense from './app/screens/sense';

const logo = require('./assets/logo_reverse.png')

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={style.header}>
          <Image source={logo} style={style.logo} />
        </View>
        <View style={{flex: 7}}> 
          <Tabs />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create ({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B98D4',
  },
  logo : {
    width: 40,
    height: 40,
  }
});
