import * as React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import List from './../Screens/NoteScreen';
import About from './../Screens/About'
import Insert from './../Screens/AddNote';
import Details from './../Screens/Detail';
import Update from './../Screens/Update';

const Stack = createStackNavigator();

function StackList({navigation}) {
	return(
			<Stack.Navigator initialRouteName="List">
				<Stack.Screen name="List"
				 component={List}
				 options={({ navigation }) => ({
				 	title: 'My Notes',
				 	headerLeft: null,
				 	headerStyle:{
				 		backgroundColor: '#ffdead',
				 	},
				 	headerTintColor: '#ff6347',
				 	headerTitleStyle:{
				 		fontWeight: 'bold',
				 	},
				 	headerRight: () => (
				 		<TouchableOpacity
				 			style={styles.button}
				 			onPress={() => navigation.navigate('Insert') }>
				 			<Text>Add Note</Text>
				 		</TouchableOpacity>
				 	),
				 })}
			 	/>
				<Stack.Screen name="Insert"
				 component={Insert}
				 options={({ navigation }) => ({
				 title: 'Add Note',
				 headerLeft: null,
			 	 headerStyle:{
			 		backgroundColor: '#ffdead',
			 	 },
			 	 headerTintColor: '#ff6347',
			 	 headerTitleStyle:{
			 		 fontWeight: 'bold',
			 	 },
			 })}
			/>
				<Stack.Screen name="Detail"
			 component={Details}
			 options={({ navigation }) => ({
			 title: 'Note Details',
			 headerLeft: null,
			 headerStyle:{
				backgroundColor: '#ffdead',
			 },
			 headerTintColor: '#ff6347',
			 headerTitleStyle:{
				 fontWeight: 'bold',
			 },
		 })}
			 />
				<Stack.Screen name="Update"
				 component={Update}/>
				<Stack.Screen name="About"
				 component={About}/>
		</Stack.Navigator>
	);
}

export default StackList;

const styles = StyleSheet.create({
	button:
	{
		marginRight: 20,
		fontWeight: "bold",
		fontSize: 20,
	}
});
