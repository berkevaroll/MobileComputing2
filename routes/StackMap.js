import * as React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Map from './../Screens/MapScreen';
import Add from './../Screens/MarkerAdd';
import Edit from './../Screens/EditMarker';
import Home from './../Screens/Home';
const Stack = createStackNavigator();

function StackMap({navigation}) {
	return(
			<Stack.Navigator initialRouteName="Map">
				<Stack.Screen name="Map" component={Map}
				options={{headerShown : false,}}

				// options={({ navigation }) => ({
				//  title: 'My Notes',
				//  headerLeft: null,
				//  headerStyle:{
				// 	 backgroundColor: '#ffdead',
				//  },
				//  headerTintColor: '#ff6347',
				//  headerTitleStyle:{
				// 	 fontWeight: 'bold',
				//  },
				//  headerRight: () => (
				// 	 <TouchableOpacity
				// 		 style={styles.button}
				// 		 onPress={() => navigation.navigate('Home') }>
				// 		 <Text>Logout</Text>
				// 	 </TouchableOpacity>
				//  ),
				// })}/>
				/>
				<Stack.Screen name="AddMarker" component={Add}/>
				<Stack.Screen name="Edit" component={Edit}/>
			</Stack.Navigator>
	);
}

export default StackMap;
const styles = StyleSheet.create({
	MainContainer:
	{
		flex:1,
	},
	Container:
	{
		flex:1,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	ContentInputType:
	{
		fontSize: 20,
	},
	TextInputStyle:
	{
		fontSize: 20,
	},
	button:
	{
		alignItems: 'center',
		fontSize: 2,
	}
});
