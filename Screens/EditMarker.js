import React, { Component, useState, useEffect, useContext} from 'react';
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
import {LocalizationContext} from '../services/localization/LocalizationContext';
import { StackActions } from '@react-navigation/native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
function EditMarker({navigation,route}) {

  const {translations} = useContext(LocalizationContext);
  const {_title}=route.params;
  const{_desc}=route.params;
  const{_id}=route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  // const [lng, setLng] = useState(true);
  // const [lat, setLat] = useState([]);
  // const [userid, setUserId] = useState('');

  function updateMarker (){
      fetch('http://192.168.0.113/React/v1/editmarker.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

          title: title,

          description: desc,

          id: _id
        })

      }).then((response) => response.json())
        .then((responseJson) => {
          Alert.alert(responseJson);
          if(responseJson === 'Marker Updated Successfully')
           {

             navigation.dispatch(StackActions.replace('Map'));

           }
        }).catch((error) => {
          console.error(error);
        });
    }
    function checkEmpty(string){
      if(string === ''){
        setTitle(_title);
      }
    }
    function deleteMarker (){

        fetch('http://192.168.0.113/React/v1/deletemarker.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({

            id: _id
          })

        }).then((response) => response.json())
          .then((responseJson) => {
            Alert.alert(responseJson);
            if(responseJson === 'Marker is Removed Successfully')
             {

               navigation.dispatch(StackActions.replaces('Map'));

             }
          }).catch((error) => {
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
          textColor="black"
          style={styles.textinput}
          defaultValue={_title}

          onChangeText={text => setTitle(text)}
        />
        <TextInput
          label={translations.DESCRIPTION}
          options={{multiline:true}}
          style={styles.textinput}
          defaultValue={_desc}
          onChangeText={text => setDesc(text)}
        />
        <View style={styles.buttonview}>
          <Button
            color="darkorange"
            title={translations.UPDATE_MARKER}
            onPress={() => updateMarker()}
          />
          <Button
            color="darkgrey"
            title={translations.REMOVE_MARKER}
            onPress={() => deleteMarker()}
          />

        </View>

      </View>

    </View>
	);
}

export default EditMarker;
