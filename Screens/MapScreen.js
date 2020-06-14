import React, {useEffect, useState, Component, useContext} from 'react';
import { View,Alert, Text, Button, TextInput, StyleSheet, Image, SafeAreaView } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { StackActions } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import {LocalizationContext} from '../services/localization/LocalizationContext';
let markersURL = 'http://192.168.0.113/React/v1/getmarkers.php'
export default class MapScreen extends Component {
	static contextType = LocalizationContext
	constructor(props){

		super(props);
		this.state = {
				data:[],
				marker:null,
				region:{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.015,
					longitudeDelta: 0.0121,
				},
		};
}

	watchId: ?number = null
	componentDidMount(){

		const translations = this.context;
		Geolocation.getCurrentPosition(
			position => {
				var lat = parseFloat(position.coords.latitude)
				var long = parseFloat(position.coords.longitude)

				var initialRegion = {
					latitude: lat,
					longitude: long,
					latitudeDelta: 0.1,
					longitudeDelta: 0.1,

				}
				this.setState({region: initialRegion})
			},
			error => Alert.alert('Error', JSON.stringify(error)),
			{enableHighAccuracy: true, timeout:20000, maximumAge: 1000},
		);

		this.watchID = Geolocation.watchPosition(position => {
			var lat = parseFloat(position.coords.latitude)
			var long = parseFloat(position.coords.longitude)

			var newRegion = {
				latitude: lat,
				longitude: long,
				latitudeDelta: 0.1,
				longitudeDelta: 0.1,

			}
			this.setState({region: newRegion})
		});

		this.webService();
	}
	setRegion =(e) =>{
		this.setState({region:{longitude: e.nativeEvent.coordinate.longitude, latitude: e.nativeEvent.coordinate.latitude, longitudeDelta: 0.0121, latitudeDelta: 0.015}});
	}
	webService = () => {

		fetch(markersURL)
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					loading: false,
					data: responseJson.results,
				})
			})
			.catch((error) => console.error(error))

	}
	navigateAdd = (e) => {
		this.props.navigation.dispatch(StackActions.replace('AddMarker', {paramlng: e.nativeEvent.coordinate.longitude,paramlat:e.nativeEvent.coordinate.latitude}));
		// this.props.navigation.navigate('AddMarker', {paramlng: e.nativeEvent.coordinate.longitude,paramlat:e.nativeEvent.coordinate.latitude});
	}
	navigateEdit = (e,marker) => {
		 this.props.navigation.dispatch(StackActions.replace('Edit', {_title: marker.title,_desc: marker.description,_id:marker.id}));
	}
	componentWillUnmount() {
		this.watchID != null && Geolocation.clearWatch(this.watchId);
	}

	render(){

		// const user_name = navigation.getParam('_id', '');
		//this.webService();
		return(
		<View style={styles.container}>
			<MapView
				provider={PROVIDER_GOOGLE}
				style={styles.map}
				region={this.state.region}
				onPress={(e) => {this.setState({marker: e.nativeEvent.coordinate});this.setRegion(e);}}
			>
			{
				this.state.marker &&
				<Marker
				coordinate = {this.state.marker}
				key={'markerID'}
				title={'Clicked Marker'}>
				<Callout  style={{alignItems: 'center', justifyContent:'center'}}onPress={(e) => this.navigateAdd(e)}>
					<Text>Custom Marker</Text>
					<Text>Please click here to add a new marker.</Text>

				</Callout>
				</Marker>
			}
			{

					this.state.data.map(marker => (
					<Marker
						key={marker.id}
						coordinate={{latitude: parseFloat(marker.lat), longitude: parseFloat(marker.lng)}}
						title={marker.title}>
							<Callout  onPress={(e) => this.navigateEdit(e,marker)}>
								<Text style={{textAlign: 'center',fontWeight:'bold', margin: 5}}>{marker.title}</Text>
								<Text style={{textAlign: 'left'}}>{marker.description}</Text>
								<Text style={{marginTop:15,fontStyle:'italic'}}>Please click here to view marker details</Text>
							</Callout>
					</Marker>
				))
		}
		</MapView>
	</View>
)
}
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
