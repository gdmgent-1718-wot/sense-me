import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../Config/Theme';
import LoginService from '../Actions/Login/AuthActions';

class Login extends React.Component{  
    constructor(props){
        super(props);
    }

    render(){  
        return (
            <View>
              <Text>Login</Text> 
              <LoginService /> 
            </View>
        )
    }
}
    
export default Login;
