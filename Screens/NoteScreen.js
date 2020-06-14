import React, {Component, useState, useEffect, useContext } from 'react';
import { StyleSheet,Dimensions, Platform, View, Text, Button, TextInput, Image, SafeAreaView, TouchableWithoutFeedback, FlatList } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LocalizationContext} from '../services/localization/LocalizationContext';

import Realm from 'realm';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

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

	const {translations} = useContext(LocalizationContext);
	const [dimensions, setDimensions] = useState({window,screen});
  const onChange = ({window,screen}) => {
    setDimensions({window,screen});
  };
  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });
	const notes = getupdatedata(query);
	return (
		<View style={ dimensions.window.height > dimensions.window.width ? styles.MainContainer : styles.MainContainerL }>
			<FlatList
				data={notes}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TouchableWithoutFeedback onPress={ () => actionOnRow(item, navigation)}>
						<View style={dimensions.window.height > dimensions.window.width ? styles.line : styles.lineL}>
						<Image
						style={{width:70,height:70,marginRight:20,
						}}
						source={require('../images/note.png')}
						/>
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
		backgroundColor:'#C27346',
		flex:1,
		justifyContent: 'center',
		paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
	},
	MainContainerL:
	{
		backgroundColor: '#43314E',
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
		backgroundColor: '#72CB95',
		margin: 5,
		flex: 2,
		padding: 10,
		flexDirection: 'row',
	},
	lineL:
	{
		backgroundColor: '#1DC4F9',
		margin: 5,
		flex: 2,
		padding: 10,
		flexDirection: 'row',
	}
});

export default NoteScreen;
