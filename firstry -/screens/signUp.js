import React, {Component} from 'react';
import { AppRegistry,StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';



class signUp extends Component{
    render(){
        return(
<View style={{backgroundColor:'#f2f2f2', flex:1 }}>

 

          <Image
          style={styles.logo}
          source={{uri: 'https://image.ibb.co/mebcap/logo.png'}}
        />
 

<Text style={{textAlign: 'right',fontSize: 18, margin: 19}}> تسجيل جديد</Text>

 

<ScrollView>

<Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20}}>الاسم</Text>

<TextInput style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20, marginLeft: 20, backgroundColor:'#dcdcdc',height: 40, borderColor: '#cccccc', borderWidth: 1}}/>

<Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20}}>البريد الالكتروني</Text>

<TextInput style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20, marginLeft: 20, backgroundColor:'#dcdcdc',height: 40, borderColor: '#cccccc', borderWidth: 1}}/>

<Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20}}> اسم المستخدم</Text>

<TextInput style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20, marginLeft: 20, backgroundColor:'#dcdcdc',height: 40, borderColor: '#cccccc', borderWidth: 1}}/>

<Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20}}>كلمة المرور</Text>

<TextInput style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20, marginLeft: 20, backgroundColor:'#dcdcdc',height: 40, borderColor: '#cccccc', borderWidth: 1}}/>

<Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20}}>تأكيد كلمة المرور</Text>

<TextInput style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20, marginLeft: 20, backgroundColor:'#dcdcdc',height: 40, borderColor: '#cccccc', borderWidth: 1}}/>

<Button style={{width: 50, height: 50, backgroundColor: 'powderblue', fontSize:14, margin:20}}

title="تسجيل"

onPress={() => this._handlePress()}>تسجيل</Button> 

 

</ScrollView>

 

</View>
       
        );
    }
}


export default signUp;

 

const styles = StyleSheet.create({

logo:{

marginTop: 60,

margin: 10,

height: 128,

width: 128,

alignSelf: 'center'

},

 

});

