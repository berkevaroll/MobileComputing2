import React, {Component, useState, useEffect } from 'react';
import { StyleSheet, Alert, TouchableOpacity, Platform, View, Text, Button, TextInput, Image, SafeAreaView, TouchableWithoutFeedback, FlatList } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackActions } from '@react-navigation/native';
import Realm from 'realm';

let realm;
const Stack = createStackNavigator();


function Update({ route, navigation }) {
	const { id, title, content, location } = route.params;

	const [title1, setTitle1] = useState(title);
	const [content1, setContent1] = useState(content);
	const [location1, setLocation1] = useState(location);
	
	function update(){
		if(title1 && content1 && location1) {
			realm = new Realm({ path: 'notes.realm' });

			realm.write(() => {
				var obj = realm
				.objects('notes')
				.filtered('id =' + id);
			if(obj.length > 0) {
				obj[0].title = title1
				obj[0].content = content1
				obj[0].location = location1
			Alert.alert(
				'Info',
				'Updated Successfully!',
				[
					{
						text: 'OK',
						onPress: () =>
							navigation.dispatch(StackActions.popToTop())
					},
				],
				{ cancelable: false}
				);
			} else{
				alert('Operation failed!');
			}
			});
		navigation.dispatch(StackActions.popToTop());
	}
}

	return (
		<View style={ styles.MainContainer }>
			<TextInput
				placeholder="Enter a title"
				style = { styles.TextInputStyle}
				underlineColorAndroid = "transparent"
				onChangeText={text => setTitle1(text)}
			>{title1}</TextInput>
			<TextInput
				placeholder="Type your note"
				style = { styles.ContentInputType}
				underlineColorAndroid = "transparent"
				onChangeText={text => setContent1(text)}
			>{content1}</TextInput>
			<TextInput
				placeholder="Insert a City"
				style = { styles.TextInputStyle}
				underlineColorAndroid = "transparent"
				onChangeText={text => setLocation1(text)}
			>{location1}</TextInput>
			<TouchableOpacity onPress={update} style={styles.button}>
				<Text> Update Record </Text>
			</TouchableOpacity>
		</View>
	);
}

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

export default Update;