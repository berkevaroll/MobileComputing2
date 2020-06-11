import React from 'react';
import { View, Text, Button, TextInput, Image, SafeAreaView } from 'react-native';

function MapScreen({ navigation}) {
/*	const { param1 } = route.params;
	const { test } = route.params;*/
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		<Text>Notes will be here!!</Text>

		<Button color="orange" title="Go to About" onPress={() => navigation.navigate('About')} />
		</View>
		);
}

export default MapScreen;