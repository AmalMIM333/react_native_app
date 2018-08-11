import React, {Component} from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';


class LoginScreen extends Component {
    render(){
        return(
            <View>
            <Button style={{width: 50, height: 50, backgroundColor: '#C7B8B8', fontSize:14, margin:20}} 
                      onPress={()=>
                this.props.navigation.navigate ('profile')} title="الملف الشخصي"/>
                     <Button style={{width: 50, height: 50, backgroundColor: '#C7B8B8', fontSize:14, margin:20}} 
                      onPress={()=>
                this.props.navigation.navigate ('LoginScreen')} title="تسجيل الخروج"/>
           
            <Text style={{textAlign: 'right',fontSize: 18,    marginTop: 70}}>اسم البرنامج: المستكشف</Text>

<Image
          style={styles.logo}
          source={{uri: 'https://image.ibb.co/hVkhap/cover.jpg'}}
        />
                    <Text style={{textAlign: 'right',fontSize: 18,    marginTop: 70}}>اسم البرنامج: المطور</Text>

<Image
          style={styles.logoo}
          source={{uri: 'https://preview.ibb.co/guRXRU/Developer.jpg'}}
        />

               <Button onPress={()=>
                this.props.navigation.navigate ('trainningprograms')} title="البرامج التدريبية"/>
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({

    logo:{
    
    
    marginTop: 5,
    height: 128,
    
    width: 350,
    backgroundColor:'#545267',
    alignSelf: 'center'
    
    },
    logoo:{
        
        
        marginTop: 5,
        height: 128,
        
        width: 350,
        backgroundColor:'#545267',
        alignSelf: 'center',
        marginBottom:50
        }
    
     
    
    });
