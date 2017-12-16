import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, Image, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';
export class EventDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            event: {}
        }
        console.log(this.state);
    }

    componentDidMount() {
       console.log(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data != null) {
            console.log(nextProps);
        }
    }
    render() {
        const { isLoading } = this.state;
        console.log(this.state)
        return (
            <View style={styles.container}>
              <Text>{this.state.event.name}</Text>
            </View>
        );
    }
}
export default connect(({routes}) => ({routes}))(EventDetail)
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch'
    },
    containerList: {
        padding: 3,
    },
    photo: {
        minHeight: 150,
        alignSelf: 'stretch',
        backgroundColor: '#000000'
    },
    info: {
        padding: 15,
        height: 75,
        backgroundColor: '#efefef',
        borderBottomWidth: 1,
        borderColor: '#000', 
        justifyContent: 'center'
    }, 
    title: {
        fontWeight: '800',
        fontSize: 18, 
    }

});
