import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Map from './../Screens/MapScreen';
import Add from './../Screens/MarkerAdd'
import Edit from './../Screens/EditMarker'

const Stack = createStackNavigator();

function StackMap({navigation}) {
	return(
			<Stack.Navigator initialRouteName="Map">
				<Stack.Screen name="Map" component={Map}/>
				<Stack.Screen name="AddMarker" component={Add}/>
				<Stack.Screen name="Edit" component={Edit}/>
			</Stack.Navigator>
	);
}

export default StackMap;
