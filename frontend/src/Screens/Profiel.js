import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../Components/Header/index';

class Profiel extends Component {
  render() {
    return (
      <View>
				<Header/>
        <Text style={style.statusText}>Profiel</Text>
      </View>
    );
  }
}

const style = StyleSheet.create ({
	statusText: {
		fontSize: 40,
		fontWeight: 'bold',
		marginTop: 60,
		textAlign: 'center',
		color: 'black',
		backgroundColor: 'rgba(0,0,0,0)',
	}
})

export default Profiel;