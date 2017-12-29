import React from 'react';
import { Provider, connect } from 'react-redux';
import { Scene, Actions, Router} from 'react-native-router-flux';
import Header from './src/Components/Header/index';
import navigator from './src/Config/Router';
import store from './src/Reducers/Index';
import { View } from 'react-native'

import PropTypes from 'prop-types';

const ReduxRouter = connect()(Router);


export default class App extends React.Component {
    constructor(props){
        super(props);
      }

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