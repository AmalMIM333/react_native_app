import React, {Component} from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';



class profile extends Component {
    render(){
        return(

            <View style={{backgroundColor:'#f2f2f2', flex:1}}>
    
     
    
            {/* <Image style={styles.logo} source={require("logo.png")}/> */}
            
             
            
            <Text style={{textAlign: 'right',fontSize: 18, margin: 19, marginBottom: 30}}>  الملف الشخصي </Text>
            
             
            
            <ScrollView>
            
            <Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20}}> الاسم</Text>
            

            <Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20 ,borderRadius: 4,borderWidth: 1.5,borderColor: '#d6d7da'}}> محمد أحمد صالح  </Text>

            <Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20}}>  البريد الالكتروني </Text>
            
            <Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20 ,borderRadius: 4,borderWidth: 1.5,borderColor: '#d6d7da'}}> aa33@gmail.com  </Text>
            
            <Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20}}>  اسم المستخدم</Text>
            
            <Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20 ,borderRadius: 4,borderWidth: 1.5,borderColor: '#d6d7da'}}> mzs  </Text>
            
            <Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20}}>المنطقة </Text>
            
            <Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20 ,borderRadius: 4,borderWidth: 1.5,borderColor: '#d6d7da'}}> القصيم  </Text>
            
            <Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20}}>المدينة</Text>
            
            <Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20 ,borderRadius: 4,borderWidth: 1.5,borderColor: '#d6d7da',marginBottom:100}}> بريدة  </Text>
            
            {/* <CheckBox
            
            center
            
            title='انقر هنا لتصلك الرسائل على البريد الالكتروني'
            
             
            
            /> */}
            
             
            
             <Button center
            
            style={{width: 50, height: 50, backgroundColor: 'powderblue', fontSize:14, margin:20}}
            
            title="تعديل"
            
            onPress={() => this._handlePress()}>تعديل</Button> 
            
             
            
            </ScrollView>
            
             
            
            </View>
            
        );
    }
}

export default profile;










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
     

    
    
    
    
    
    
 
     
    
 
     
    

    

    
     
 
    
    
    
     
    
