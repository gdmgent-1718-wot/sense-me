import { StyleSheet } from 'react-native';
import Colors from '../../Config/Theme';

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

export default styles;
