import React, {Component, useState, useEffect, useContext } from 'react';
import { StyleSheet, Alert, TouchableOpacity, Platform, View, Text, Button, TextInput, Image, SafeAreaView, TouchableWithoutFeedback, FlatList } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
//import { StackActions } from '@react-navigation/native';
import Realm from 'realm';
import {LocalizationContext} from '../services/localization/LocalizationContext';


let realm;
//const Stack = createStackNavigator();


function Detail({ route, navigation }) {
	const { id, title, content, location } = route.params;
const {translations} = useContext(LocalizationContext);
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
			translations.INFO,
			translations.DELETE_CONFIRM,
			[
				{text: translations.NO, onPress: () => console.log('Canceled'), style: 'cancel'},
				{text: translations.YES, onPress: () => {deleteNote();}},
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
				<Text style={ styles.TextInputStyle }>{translations.TITLE}: {title}</Text>
				<Text style={ styles.TextInputStyle }>{translations.CONTENT}: {content}</Text>
				<Text style={ styles.TextInputStyle }>{translations.LOCATION}: {location}</Text>
			</View>
			<View style={ styles.Container}>
				<TouchableOpacity onPress={updateData} style={styles.button}>
					<Text> {translations.UPDATE_NOTE} </Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={deleteData} style={styles.button}>
					<Text> {translations.REMOVE_NOTE} </Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	MainContainer:
	{
		backgroundColor:'#5AD8C8',
		flex:1,
		alignItems:'center',
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
		color:"#543053",
		margin: 20,
	},
	button: {

	    color: 'black',
	    fontSize: 24,
	    alignItems: 'center',
	  	borderColor: 'black',
			alignSelf:'center',
			borderWidth: 2,
			borderRadius:20,
  },
});

export default Detail;
