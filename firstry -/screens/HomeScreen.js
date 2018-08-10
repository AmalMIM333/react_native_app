import React, {Component} from "react";
import {
     View,
     Text,
     StyleSheet,
     Button
    } from "react-native";


class LoginScreen extends Component {
    render(){
        return(
            <View>
               <Text> logggggg</Text>
               <Button onPress={()=>
                this.props.navigation.navigate ('trainningprograms')} title="البرامج التدريبية"/>
            </View>
        );
    }
}

export default LoginScreen;