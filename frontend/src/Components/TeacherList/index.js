import React, { Component } from 'react';
import { Text, Image, View, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Actions } from 'react-native-router-flux'; 
import { connect } from 'react-redux';
import styles from './style';

export class TeacherList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
        }
    }

    componentDidMount() {
        this.props.fetchTeachers();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data != null && nextProps.error == undefined) {
            this.setState({data: nextProps.data})
        }
    }

    renderItems = () => {
        return this.state.data.map((teacher, i) => {
          return (
           <View style={styles.row} key={i}>
                <Image style={styles.image} source={{uri: teacher.profile_picture}}/>
                <View style={styles.text}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.about}>{teacher.about}</Text>
                </View>    
                <Button style={styles.btn} onPress={() => {}} title='Chat' />
            </View> );
        })
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.grid}>
                {this.state.data.length > 0? this.renderItems():<Text>No teachers found.</Text> }
            </ScrollView>
        );
    }
}
export default connect(({routes}) => ({routes}))(TeacherList)
