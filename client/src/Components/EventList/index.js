import React, { Component } from 'react';
import { Text, View, ListView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';
import 'moment/locale/nl-be';
import { Actions } from 'react-native-router-flux'; 
import { connect } from 'react-redux';
import Colors from '../../Config/theme';

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
        this.props.callEvents();
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
            style={styles.containerList} onPress={() => {
                this.props.select(event._id)
                this.props.fetch(event._id)
            }}>
            <Image source={{ uri: event.src }} style={styles.photo}/>
            <View style={styles.info}>
                <Text style={styles.title}>{event.name}</Text>
                <Text>{moment(event.date).format('DD/MM/YY')}   {event.start}-{event.stop}</Text>
            </View>
        </TouchableOpacity>
    );

    render() {
        const { dataSource, isLoading } = this.state;
        return (
            <View>
                <ListView enableEmptySections={true} dataSource={dataSource} renderRow={(event) => this.renderCell(event)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerList: {
        padding: 20
    },
    photo: {
        minHeight: 150,
        alignSelf: 'stretch',
    },
    info: {
        padding: 15,
        height: 75,
        backgroundColor: Colors.gray,
        borderBottomWidth: 1,
        justifyContent: 'center'
    }, 
    title: {
        fontWeight: '800',
        fontSize: 18, 
    }

});

export default connect(({routes}) => ({routes}))(EventList)
  