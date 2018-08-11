import React, {Component} from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';



class taj extends Component {
    render(){
        return(
            <View style={{backgroundColor:'#f2f2f2', flex:1}}>

 

 <Image
          style={styles.logo}
          source={{uri: 'https://image.ibb.co/mebcap/logo.png'}}
        />             
             
            
            <Text style={{textAlign: 'right',fontSize: 18, margin: 19, marginBottom: 25}}>اسم البرنامج: المحلل</Text>
            
            <Text style={{textAlign: 'right',fontSize: 16, marginRight:19, marginBottom: 20}}>المهام التي يجب تسليمها</Text>
            
            <Text style={{textAlign: 'right',fontSize: 16, marginLeft:1, marginBottom: 15}}>- UI and UX </Text>
            
            
             
            
             <Button style={{width: 50, height: 50, backgroundColor: 'powderblue', fontSize:14, margin:20}}
            
            title="تسليم المهمة"
            
            onPress={() => this._handlePress()}
            
            ></Button>
            
            <Text style={{textAlign: 'right',fontSize: 16, marginLeft:1, marginBottom: 15}}>- Design </Text>
            
            
             
            
             <Button style={{width: 50, height: 50, backgroundColor: 'powderblue', fontSize:14, margin:20}}
            
            title="تسليم المهمة"
            
            onPress={() => this._handlePress()}
            
            ></Button>
            
            </View>
            
        );
    }
}

export default taj;









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










 