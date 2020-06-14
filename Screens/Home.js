import React, { Component, useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Button,
  TextInput,
  Alert,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import styles  from './../stylesheet/styles1';
import { StackActions } from '@react-navigation/native';
import {LocalizationContext} from '../services/localization/LocalizationContext';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
function Home({navigation}) {

  const {translations} = useContext(LocalizationContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
	<View style={dimensions.window.height > dimensions.window.width ? styles.bodyP : styles.bodyL}>
      <View style={dimensions.window.height > dimensions.window.width ? styles.part1P : styles.part1L}>
      <Image
          style={dimensions.window.height > dimensions.window.width ? styles.loginP : styles.loginL}
          source={require('../images/login.png')}
        />
      </View>
      <View style={dimensions.window.height > dimensions.window.width ? styles.part2P : styles.part2L}>
        <TextInput

          placeholder={translations.USERNAME}
          onChangeText={text => setUsername(text)}
          defaultValue={username}
          style={styles.TextInputStyleClass}
        />
        <TextInput

          placeholder={translations.PASSWD}
          onChangeText={text => setPassword(text)}
          style={styles.TextInputStyleClass}
          defaultValue={password}
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <Button
          style={styles.button}
            color="orange"
            title={translations.B_LOGIN}
            onPress={() => UserLoginFunction()}
          />
          <TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate('Register')} >

            <Text style={styles.textopacity}> {translations.REGISTER_LINK} </Text>

          </TouchableOpacity>
        </View>

      </View>
      <View style={dimensions.window.height > dimensions.window.width ? styles.part3P : styles.part3L}>
        <Button
          color="orange"
          title={translations.MY_NOTES}
          onPress={() => navigation.navigate('DrawerRoute')}
        />


      </View>
    </View>
	);
}

export default Home;
