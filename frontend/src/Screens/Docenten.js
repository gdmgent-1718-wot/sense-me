import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Docenten extends Component {
  render() {
    return (
      <View style={style.container}>
          <Text style={style.statusText}>Docenten</Text>
      </View>
    );
  }
}

const style = StyleSheet.create ({
    container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	statusText: {
		fontSize: 40,
		fontWeight: 'bold',
		marginTop: 60,
		textAlign: 'center',
		color: 'black',
		backgroundColor: 'rgba(0,0,0,0)',
	}
})

export default Docenten;