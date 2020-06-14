import React, {Component, useState, useEffect, useContext } from 'react';
import { StyleSheet, TouchableOpacity, Platform, View, Text, Button, TextInput, Image, SafeAreaView, TouchableWithoutFeedback, FlatList } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackActions } from '@react-navigation/native';
import Realm from 'realm';
import {LocalizationContext} from '../services/localization/LocalizationContext';

let realm;
const Stack = createStackNavigator();


function AddNote({ navigation }) {
	const {translations} = useContext(LocalizationContext);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [city, setCity] = useState('');
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = mm + '/' + dd + '/' + yyyy;
	function insert(){
		if(title && content && city) {
			realm = new Realm({ path: 'notes.realm' });

			const lastRecord = realm.objects("notes").sorted('id', true)[0];
			const highestId = lastRecord == null ? 0 : lastRecord.id;
			const newId = highestId == null ? 1 : highestId + 1;

			realm.write(() => {
				realm.create('notes', {
					id: newId,
					title: title,
					content: content,
					location: city,
					date: today,
				});
			});
		navigation.dispatch(StackActions.popToTop());
		}
	}
	return (
		<View style={ styles.MainContainer }>
			<TextInput
				placeholder={translations.ENTER_TITLE}
				style = { styles.TextInputStyle}
				underlineColorAndroid = "transparent"
				onChangeText={text => setTitle(text)}
			/>
			<TextInput
				placeholder={translations.TYPE_NOTE}
				style = { styles.ContentInputType}
				underlineColorAndroid = "transparent"
				onChangeText={text => setContent(text)}
			/>
			<TextInput
				placeholder={translations.INSERT_CITY}
				style = { styles.TextInputStyle}
				underlineColorAndroid = "transparent"
				onChangeText={text => setCity(text)}
			/>
			<TouchableOpacity onPress={insert} style={styles.button}>
				<Text> {translations.ADD_NOTE}</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	MainContainer:
	{
		flex:1,
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

export default AddNote;
