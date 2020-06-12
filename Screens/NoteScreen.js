import React, {Component, useState, useEffect } from 'react';
import { StyleSheet, Platform, View, Text, Button, TextInput, Image, SafeAreaView, TouchableWithoutFeedback, FlatList } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Realm from 'realm';

const realm = new Realm({
	path: 'notes.realm',
	schema: [{
		name: 'notes',
			properties:
			{
				id: {type: 'int', default: 0},
				title: 'string',
				content: 'string',
				location: 'string',
				date: 'date',
			}
	}]
});

const query = () => realm.objects('notes');

function getupdatedata(query) {
	const [data, setData] = useState(query());

	useEffect(
		() => {
			function handleChange(newData){
				setData([...newData]);
			}
			const dataQuery = query();
			dataQuery.addListener(handleChange);
			return() => {
				dataQuery.removeAllListeners();
			};
		},
		[query]
	);
	return data;
}

function actionOnRow(item, navigation){
	navigation.navigate('Detail', item);
}
function NoteScreen({ navigation }) {

	const notes = getupdatedata(query);
	return (
		<View style={ styles.MainContainer }>
			<FlatList
				data={notes}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TouchableWithoutFeedback onPress={ () => actionOnRow(item, navigation)}>
						<View style={styles.line}>
							<View style={{flex: 1, flexDirection: 'column'}}>
								<Text style={styles.texttitle}>{item.title}</Text>
								<Text style={styles.textloc}>{item.location}</Text>
							</View>
							<View style={{flex: 1, alignItems: 'flex-end'}}>
								<Text style={styles.textdate}> {String(item.date.getDate())} / {String(item.date.getMonth()+1)} /{String(item.date.getFullYear())} </Text>
							</View>
						</View>
					</TouchableWithoutFeedback>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	MainContainer:
	{
		flex:1,
		justifyContent: 'center',
		paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
		margin: 10
	},
	texttitle:
	{
		fontWeight: "bold",
		fontSize: 25,
	},
	textloc:
	{
		marginTop: 10,
		fontSize: 16,
		color: "blue"
	},
	textdate:
	{
		fontSize: 12,
	},
	line:
	{
		backgroundColor: '#3cb371',
		margin: 5,
		flex: 2,
		padding: 10,
		flexDirection: 'row',
	}
});

export default NoteScreen;
