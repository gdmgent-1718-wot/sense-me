import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TeacherList from '../Actions/Teachers/TeacherActions';

class Docenten extends Component {
  render() {
    return (
      <View style={style.container}>
      	<TeacherList />
      </View>
    );
  }
}

const style = StyleSheet.create ({
    container: {
		flex: 1,
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