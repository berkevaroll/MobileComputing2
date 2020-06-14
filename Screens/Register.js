import React, {useEffect, useState, Component, useContext} from 'react';
import { ActivityIndicator,TextInput, StyleSheet, FlatList, View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import { StackActions } from '@react-navigation/native';
import {LocalizationContext} from '../services/localization/LocalizationContext';

export default Register = ({navigation}) => {

  const {translations} = useContext(LocalizationContext);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

function registration_Function (){



    fetch('http://192.168.0.113/React/v1/register.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        username: username,

        email: email,

        password: password

      })

    }).then((response) => response.json())
      .then((responseJson) => {

        Alert.alert(responseJson);
        if(responseJson === 'User Registered Successfully'){
          navigation.dispatch(StackActions.popToTop());
        }
      }).catch((error) => {
        console.error(error);
      });


  }

  return (
    <View style={styles.MainContainer}>

        <Text style={{ fontSize: 20, color: "#DD2C00", textAlign: 'center', marginBottom: 15 }}>User Registration</Text>

        <TextInput
          placeholder={translations.ENTER_NAME}
          onChangeText={text => setUsername(text)}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder={translations.ENTER_MAIL}
          onChangeText={text => setEmail(text)}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder={translations.ENTER_PASSWD}
          onChangeText={text => setPassword(text)}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={() => registration_Function()} >

          <Text style={styles.text}> {translations.REGISTER} </Text>

        </TouchableOpacity>

      </View>
  );
}
const styles = StyleSheet.create({

  MainContainer: {


    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10
  },

  TextInputStyleClass: {

    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: '#DD2C00',
    borderRadius: 5,
  },

  button: {

    width: '80%',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#DD2C00',
    borderRadius: 3,
    marginTop: 20
  },

  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 5
  }

});
