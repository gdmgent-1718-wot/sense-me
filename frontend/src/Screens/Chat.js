import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


class Chat extends Component {
  render() {
    return (
      <View style={style.container}>

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

export default Chat;