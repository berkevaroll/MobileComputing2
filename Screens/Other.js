import React from 'react';
import { View, Text, Button } from 'react-native';

function Other({navigation}) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		<Text>YOU ARE AT OTHER PAGE!!</Text>
		
		<Button color="blue" title="Logout" onPress={() => navigation.navigate('Login')} />
		</View>
		);
}

export default Other;