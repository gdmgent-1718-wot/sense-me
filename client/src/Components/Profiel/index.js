import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

export class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
        }
    }

    componentDidMount() {
        this.props.login();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data != null && nextProps.error == undefined) {
            this.setState({data: nextProps.data})
        }
    }

    renderItem = () => {
        return this.state.map((user) => {
            <View>
                <Text>{user.email}</Text>
            </View>
        })
    }
}