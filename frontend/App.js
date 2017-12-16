import React from 'react';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import {Scene, Actions, Router} from 'react-native-router-flux';
import { navigator } from './src/Config/Router';
import store from './src/Reducers/index';
import Header from './src/Components/Header/index';
import { View } from 'react-native'


const ReduxRouter = connect()(Router);
// it is important to load reducers AFTER actions.create (so no import here)
const AppReducers = require('./src/Reducers/index').default;

export default
class App extends React.Component {
    render() {
        console.log(this.state)
        return (
            <Provider store={store}>
            <View style={{flex: 1}}>
                <Header />
                <ReduxRouter navigator={navigator} />
                </View>
            </Provider>
        );
    }
}