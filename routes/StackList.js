import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import List from './../Screens/NoteScreen';
import About from './../Screens/About'

const Stack = createStackNavigator();

function StackList({navigation}) {
	return(
			<Stack.Navigator initialRouteName="List">
				<Stack.Screen name="List" component={List}/>
				<Stack.Screen name="About" component={About}/>
			</Stack.Navigator>			
	);
}

export default StackList;