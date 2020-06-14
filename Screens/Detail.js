import React, {Component, useState, useEffect } from 'react';
import { StyleSheet, Alert, TouchableOpacity, Platform, View, Text, Button, TextInput, Image, SafeAreaView, TouchableWithoutFeedback, FlatList } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
//import { StackActions } from '@react-navigation/native';
import Realm from 'realm';

let realm;
//const Stack = createStackNavigator();


function Detail({ route, navigation }) {
	const { id, title, content, location } = route.params;

	function updateData(){
		navigation.navigate('Update', {
			id: id,
			title: title,
			content: content,
			location: location
		});
	}

	function deleteData(){
		Alert.alert(
			'Info',
			'Are you sure you want to delete this note?',
			[
				{text: 'No', onPress: () => console.log('Canceled'), style: 'cancel'},
				{text: 'Yes', onPress: () => {deleteNote();}},
			]
		);
	}
	function deleteNote(){
		realm = new Realm({ path: 'notes.realm' });
		realm.write(() => {
			let task = realm.objects('notes').filtered('id = '+ id);
			realm.delete(task);
		});
		navigation.goBack();
	}
	return (
		<View style={ styles.MainContainer }>
			<View style={ styles.MainContainer }>
				<Text style={ styles.TextInputStyle }>Title: {title}</Text>
				<Text style={ styles.TextInputStyle }>Content: {content}</Text>
				<Text style={ styles.TextInputStyle }>Location: {location}</Text>
			</View>
			<View style={ styles.Container}>
				<TouchableOpacity onPress={updateData} style={styles.button}>
					<Text> Update Note </Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={deleteData} style={styles.button}>
					<Text> Remove Note </Text>
				</TouchableOpacity>
			</View>
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

export default Detail;
