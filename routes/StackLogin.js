import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './../Screens/Home';
import Register from './../Screens/Register';
import DrawerRoute from './DrawerRoute';
import Maps from './../routes/StackMap';

const Stack = createStackNavigator();

function StackLogin({navigation}) {
	return(
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="Login" component={Login} options={{headerShown : false,}}/>
				<Stack.Screen name="Register" component={Register} options={{headerShown : false,}}/>
				<Stack.Screen name="Maps" component={Maps} options={{headerShown : false,}}/>
				<Stack.Screen name="DrawerRoute" component={DrawerRoute} options={{headerShown : false,}}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default StackLogin;
