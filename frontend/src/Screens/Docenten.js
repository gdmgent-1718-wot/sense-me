import React, { Component } from 'react';
import { View } from 'react-native';
import TeacherList from '../Actions/Teachers/teacherActions';
import Header from '../Components/Header/index';

class Docenten extends Component {
  render() {
    return (
      <View>
				<Header/>
				<TeacherList/>
      </View>
    );
  }
}

export default Docenten;