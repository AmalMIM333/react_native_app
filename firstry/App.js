


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation'
import HomeScreen from './screens/HomeScreen.js'
import LoginScreen from './screens/LoginScreen.js'
import trainningprograms from './screens/trainningprograms.js'
import signUp from './screens/signUp.js'
import profile from './screens/profile.js'
import expSkills from './screens/expSkills'
import analystskills from './screens/analystskills'
import devSkill from './screens/devSkill'


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
  expSkills:{screen : expSkills},
  signUp:{screen : signUp},
  profile:{screen : profile},
  analystskills:{screen : analystskills},
  devSkill:{screen : devSkill}

})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAECF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

