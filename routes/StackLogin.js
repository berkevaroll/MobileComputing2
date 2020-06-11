import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './../Screens/Home';
import Other from './../Screens/Other';
import DrawerRoute from './DrawerRoute';

const Stack = createStackNavigator();

function StackLogin({navigation}) {
	return(
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="Login" component={Login} options={{headerShown : false,}}/>
				<Stack.Screen name="Other" component={Other} options={{headerShown : false,}}/>
				<Stack.Screen name="DrawerRoute" component={DrawerRoute} options={{headerShown : false,}}/>
			</Stack.Navigator>
		</NavigationContainer>			
	);
}

export default StackLogin;