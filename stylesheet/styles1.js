import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
  },
  part1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  part2: {
    flex: 2,
    alignItems:'center',
  },
  part3: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 10,
  },
  buttonview: {
    flex: 1,
    margin: 10,
  },
  text: {
    color: 'black',
    fontSize: 25,
  },
  textopacity: {
    color: 'black',
    fontSize: 14,
    alignItems: 'center',
  },
  textinput: {
    width: 250,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
  },
  image: {
    flex: 1,
    width: 150,
    height: 225,
  },

});
