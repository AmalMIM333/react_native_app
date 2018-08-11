import React, {Component} from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';



class analystskills extends Component {
    render(){
        return(
            <View style={{backgroundColor:'#f2f2f2', flex:1}}>

 

      <Image
          style={styles.logo}
          source={{uri: 'https://image.ibb.co/mebcap/logo.png'}}
        />            
             
            
            <Text style={{textAlign: 'right',fontSize: 18, margin: 19, marginBottom: 25}}>اسم البرنامج: المحلل</Text>
            
            <Text style={{textAlign: 'right',fontSize: 16, marginRight:19, marginBottom: 20}}>المهارات المكتسبة</Text>
            
            <Text style={{textAlign: 'right',fontSize: 16, marginLeft:1, marginBottom: 15}}>- Analysis and Planning </Text>
            
            <Text style={{textAlign: 'right',fontSize: 16, marginLeft:1, marginBottom: 15}}>- Prototyping </Text>
            
             
            
             
            
            </View>
            
        );
    }
}

export default analystskills;









const styles = StyleSheet.create({

    logo:{
    
    marginTop: 60,
    
    margin: 10,
    
    height: 128,
    
    width: 128,
    backgroundColor:'#545267',
    alignSelf: 'center'
    
    },
    
     
    
    });