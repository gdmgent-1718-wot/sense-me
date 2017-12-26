import { StyleSheet } from 'react-native';
import Colors from '../../../Config/Theme';


const styles = StyleSheet.create ({
    container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	statusText: {
		fontSize: 40,
		fontWeight: 'bold',
		marginTop: 60,
		textAlign: 'center',
		color: 'black',
		backgroundColor: 'rgba(0,0,0,0)',
	},
	photo: {
		marginTop: 60,
        minHeight: 150,
        alignSelf: 'stretch',
        backgroundColor: '#000000'
	},
	banner: {
		flexDirection: 'row',
		backgroundColor: Colors.darkgrey,
		padding: 6,
		paddingLeft: 15,
	},
	time: {
		color: Colors.white

	},
	date: {
		color: Colors.white,
		marginRight: 10,
	},
	content: {
		padding: 15
	},
	title: {
		fontSize: 17,
		marginBottom: 5,
		fontWeight: '700'
	},
	description: {
		fontSize: 15
	}
});

export default styles;