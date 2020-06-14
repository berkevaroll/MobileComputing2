import React, { Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Button,
  TextInput,
  Alert,
  TouchableOpacity
} from 'react-native';
import styles  from './../stylesheet/styles1';
import { StackActions } from '@react-navigation/native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
function MarkerAdd({navigation,route}) {

  const {paramlng}=route.params;
  const{paramlat}=route.params;
  const{_markerid}=route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const lng = paramlng;
  const lat = paramlat;
  const userid = _markerid;
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  // const [lng, setLng] = useState(true);
  // const [lat, setLat] = useState([]);
  // const [userid, setUserId] = useState('');

  function addMarker (){

      fetch('http://192.168.0.113/React/v1/addmarker.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

          title: title,

          description: desc,

          lng: lng,

          lat: lat,

          userid: userid

        })

      }).then((response) => response.json())
        .then((responseJson) => {
          Alert.alert(responseJson);
          if(responseJson === 'Marker Added Successfully')
           {

             navigation.dispatch(StackActions.replace('Map'));

           }
        }).catch((error) => {
          console.log(error);
          console.error(error);
        });
    }
  return(
	<View style={styles.body}>
      <View style={styles.part1}>
      <Image
          style={styles.image}
          source={require('../images/marker.png')}
        />
      </View>
      <View style={styles.part2}>
        <TextInput
          style={styles.textinput}
          placeholder="Marker Title"
          onChangeText={text => setTitle(text)}
          defaultValue={title}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Marker Description"
          onChangeText={text => setDesc(text)}
          defaultValue={desc}
        />
        <View style={styles.buttonview}>
          <Button
            color="blue"
            title="Add Marker"
            onPress={() => addMarker()}
          />

        </View>

      </View>

    </View>
	);
}

export default MarkerAdd;
