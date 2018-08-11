import React, {Component} from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';



class taj extends Component {
    render(){
        return(
            <View style={{backgroundColor:'#f2f2f2', flex:1}}>
    
     
    
            {/* <Image style={styles.logo} source={require("logo.png")}/> */}
            
             
            
            <Text style={{textAlign: 'right',fontSize: 18, margin: 19, marginBottom: 30}}>اختر اسم البرنامج لعرض المهام التي يجب تسليمها</Text>
            
            <ScrollView>
            
             
            
            <Text style={{textAlign: 'right',fontSize: 16, marginRight:19, marginLeft: 19, marginBottom: 10}}>المستكشف</Text>
            
             
            
            <Button style={{width: 50, height: 50, backgroundColor: 'powderblue', fontSize:14, margin:20}}
            
            title="استعراض المهام"
            
            onPress={() => this._handlePress()}
            
            ></Button>
            
             
            
            <Text style={{textAlign: 'right',fontSize: 16, marginRight:19, marginLeft: 19, marginBottom: 10}}>المطور</Text>
            
             
            
            <Button style={{width: 50, height: 50, backgroundColor: 'powderblue', fontSize:14, margin:20}}
            
            title="استعراض المهام"
            
            onPress={() => this._handlePress()}
            
            ></Button>
            
             
            
            <Text style={{textAlign: 'right',fontSize: 16, marginRight:19, marginLeft: 19, marginBottom: 10}}>المحلل</Text>
            
             
            
            <Button style={{width: 50, height: 50, backgroundColor: 'powderblue', fontSize:14, margin:20}}
            
            title="استعراض المهام"
            
            onPress={() => this._handlePress()}
            
            ></Button>
            
            </ScrollView>
            
             
            
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
     



 
     
 
    
    
    
     


    
     