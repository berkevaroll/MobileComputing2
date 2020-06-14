import React from 'react';
import { View,Alert, Text, Button, TextInput, StyleSheet, Image, SafeAreaView } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

export default function MapScreen(){

	function pressCallOut (){
		Alert.alert('Hosgeldin bubam');
	}

return(
	<View style={styles.container}>
		<MapView
			provider={PROVIDER_GOOGLE}
			style={styles.map}
			region={{
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.015,
				longitudeDelta: 0.0121,
			}}
		>

		<Marker
			key={'Marker'}
			coordinate={{latitude: 37.78825,longitude: -122.4324}}
			title={'description'}>
				<Callout onPress={() => pressCallOut()}>
					<Text>deneme aciklamasi</Text>
				</Callout>
		</Marker>
		</MapView>
	</View>
);
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		height: '100%',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
});
