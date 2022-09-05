/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { View } from 'react-native';

const LineSeparator = ({ width = '90%' , left = 20 }) => (
	<View
		style={{
			left,
			right: 10,
			borderTopColor: '#dddddd',
			borderTopWidth: 1,
			width,
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'row',
		}}
	></View>
);

export default LineSeparator;
