import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default StyleSheet.create({
  bodyP: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'#F4F79D',
  },
  bodyL:{
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#C7C8AF',
  },
  part1P: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:20,
  },
  part1L: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
  },
  loginP:{
    alignSelf:'center',
    height: 200,
    width: 200,
  },
  loginL:{
    alignSelf:'flex-end',
    height: 200,
    width: 200,
    flexWrap:'nowrap',
    marginRight: -50,
  },
  part2P: {
    flex: 2,
    alignItems:'center',
    marginTop: 70,
  },
  part2L: {
    flex: 2,
    alignItems:'center',
    marginTop: 70,
    marginLeft: 40,
  },
  part3P: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  part3L: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 10,
  },
  buttonview: {
    flex: 1,
    margin: 10,
    flexDirection:'column',
    alignItems:'center',

  },
  buttonContainer:{
    alignItems: 'center',
    marginTop: 30,

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
    textAlignVertical:'top',
  },
  image: {
    flex: 1,
    width: 150,
    height: 225,
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

});
