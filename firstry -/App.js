


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation'
import HomeScreen from './screens/HomeScreen.js'
import LoginScreen from './screens/LoginScreen.js'
import trainningprograms from './screens/trainningprograms.js'
import signUp from './screens/signUp.js'


export default class App extends React.Component {
  render() {
    return (
<AppNavigator/>
    );
  }
}
const AppNavigator = createStackNavigator({
  LoginScreen:{screen : LoginScreen},
  HomeScreen:{screen : HomeScreen},
  trainningprograms:{screen : trainningprograms},
  signUp:{screen : signUp}

})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

