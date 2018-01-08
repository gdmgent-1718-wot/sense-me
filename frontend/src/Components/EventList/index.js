import React, { Component } from 'react';
import { Text, View, ListView, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import 'moment/locale/nl-be';
import { Actions } from 'react-native-router-flux'; 
import { connect } from 'react-redux';
import styles from './style';

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
export default connect(({routes}) => ({routes}))(EventList)
  