import React, { Component, useState} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';
import styles  from './../stylesheet/styles1';
import { StackActions } from '@react-navigation/native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
function Home({navigation}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
            onPress={() => navigation.dispatch(StackActions.replace('Other'))}
          />
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
