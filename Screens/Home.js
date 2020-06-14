import React, { Component, useState} from 'react';
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
function Home({navigation}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


function UserLoginFunction (){

fetch('http://192.168.0.113/React/v1/login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    username: username,

    password: password

  })

}).then((response) => response.json())
      .then((responseJson) => {

        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {

          navigation.dispatch(StackActions.replace('Maps'));

        }
        else{

          Alert.alert(responseJson);
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
          source={require('../images/login.png')}
        />
      </View>
      <View style={styles.part2}>
        <TextInput
          style={styles.textinput}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
          defaultValue={username}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          defaultValue={password}
        />
        <View style={styles.buttonview}>
          <Button
            color="blue"
            title="Login"
            onPress={() => UserLoginFunction()}
          />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')} >

            <Text style={styles.textopacity}> Don't have an account? Click here to register. </Text>

          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.part3}>
        <Button
          color="orange"
          title="My Notes"
          onPress={() => navigation.navigate('DrawerRoute')}
        />


      </View>
    </View>
	);
}

export default Home;
