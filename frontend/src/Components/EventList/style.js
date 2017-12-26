import { StyleSheet } from 'react-native';
import Colors from '../../Config/Theme';

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
        backgroundColor: Colors.darkGrey
    },
    info: {
        padding: 15,
        height: 75,
        backgroundColor: Colors.gray,
        borderBottomWidth: 1,
        borderColor: Colors.darkGrey, 
        justifyContent: 'center'
    }, 
    title: {
        fontWeight: '800',
        fontSize: 18, 
    }

});

export default styles;
