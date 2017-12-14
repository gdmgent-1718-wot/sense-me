import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
class EventDetail extends Component {
	constructor(props) {
		super(props);
}
  render() {
    return (
      <View style={style.container}>
        <Text>{this.props.id}</Text>
      </View>
    );
  }
}
EventDetail.PropTypes = {
    id: PropTypes.string.isRequired
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

export default EventDetail;