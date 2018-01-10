import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../Config/theme';
import LoginService from '../Actions/Login/authActions';

const logo = require('../../assets/logo_reverse.png');

class Login extends React.Component{  
    constructor(props){
        super(props);
    }

    render(){  
        return (
            <View style={styles.background}>
                <Image source={logo} style={styles.logo} /> 
                <LoginService/>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    background: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.mediumBlue,
      },
      logo : {
        marginTop: 40,
        marginBottom: 40,
        width: 250,
        height: 250,
      }
})
    
export default Login;
