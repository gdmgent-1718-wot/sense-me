import React from 'react';
import { Provider, connect } from 'react-redux';
import { Scene, Actions, Router} from 'react-native-router-flux';
import navigator from './src/Config/router';
import store from './src/Reducers/index';
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
                <ReduxRouter navigator={navigator} />
                </View>
            </Provider>
        );
    }
}