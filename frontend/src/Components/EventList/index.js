import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import 'moment/locale/nl-be';
import { Actions } from 'react-native-router-flux'; 
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
export class EventList extends Component {

    constructor(props) {
        super(props);
        moment.locale('nl-be');
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        }
    }

    componentDidMount() {
        this.props.callService();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data != null) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.data)
            });
        }
    }
    renderCell = (event) => (
        <TouchableOpacity 
            style={styles.containerList}
            onPress={() => {
                this.props.select(event._id)
                this.props.fetch(event._id)
            }}>
            <Image source={{ uri: event.src }} style={styles.photo}/>
            <View style={styles.info}>
            
                <Text style={styles.title}>{event.name}</Text>
                <Text>{moment(event.date).format('DD.MM.\'YY')}   {event.start}-{event.stop}</Text>
            </View>
        </TouchableOpacity>
    );

    render() {
        const { dataSource, isLoading } = this.state;
        return (
            <View style={styles.container}>
                <ListView
                    enableEmptySections={true}
                    dataSource={dataSource}
                    renderRow={(event) => this.renderCell(event)}
                />
            </View>
        );
    }
}
export default connect(({routes}) => ({routes}))(EventList)
  
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
