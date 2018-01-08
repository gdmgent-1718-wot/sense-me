import { StyleSheet } from 'react-native';
import Colors from '../../Config/Theme';

const styles = StyleSheet.create({
    grid: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'green'
    },
    row: {
        margin: 3,
        width: 165,
        height: 290,
        backgroundColor: 'red'
    }, 
    image: {
        backgroundColor: Colors.black,
        height: 200, 
        width: 165,
    },
    text: {
         height: 60,
        backgroundColor: Colors.gray
    },
    name: {
        fontWeight: '900',
        color: Colors.black,
        marginBottom: 2
    }, 
    about: {
        color: Colors.black
    }, 
    btn: {
        height: 30,
        color: Colors.white,
        backgroundColor: Colors.orange
    }

});

export default styles;