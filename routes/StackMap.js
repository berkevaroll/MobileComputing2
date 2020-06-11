import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Map from './../Screens/MapScreen';
import About from './../Screens/About'

const Stack = createStackNavigator();

function StackMap({navigation}) {
	return(
			<Stack.Navigator initialRouteName="Map">
				<Stack.Screen name="Map" component={Map}/>
				<Stack.Screen name="About" component={About}/>
			</Stack.Navigator>			
	);
}

export default StackMap;