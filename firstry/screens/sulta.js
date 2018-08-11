import React, {Component} from "react";
import { AppRegistry, StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';


class sulta extends Component {
    state = {text: '' };
    render(){
        return(
  
             
                 < View style={{backgroundColor:'#f2f2f2', flex:1 }}>
  
               <Button style={{width: 50, height: 50, backgroundColor: 'powderblue', fontSize:14, margin:20}} onPress={()=>
                  this.props.navigation.navigate ('taj')} title="تجربة"/>

                 <Image
            style={styles.logo}
            source={{uri: 'https://image.ibb.co/mebcap/logo.png'}}
          />
          
              <Text style={{textAlign: 'right',fontSize: 18, margin: 19}}>تسجيل الدخول </Text>
              
              <ScrollView>
              
               
              
              <Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20}}>اسم المستخدم أو البريد الالكتروني</Text>
              
              <TextInput 
              value={this.state.text}
              onChangeText={text=>this.setState({text})}
              style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20, marginLeft: 20, backgroundColor:'#dcdcdc',height: 40, borderColor: '#cccccc', borderWidth: 1}}

              />
              
               
              
              <Text style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20}}>كلمة المرور</Text>
              
              <TextInput style={{textAlign: 'right',fontSize: 14, margin: 10, marginRight: 20, marginLeft: 20, backgroundColor:'#dcdcdc',height: 40, borderColor: '#cccccc', borderWidth: 1}}/>
              
               
              
              {/* <Button style={{width: 50, height: 50, backgroundColor: 'powderblue', fontSize:14, margin:20}}
              
              title="دخول"
              
              onPress={() => this._handlePress()}>دخول</Button> */}
  
              <Button style={{width: 50, height: 50, backgroundColor: 'powderblue', fontSize:14, margin:20}} onPress={()=>
                  this.props.navigation.navigate ('HomeScreen')} title="دخول"/>
               
              
              <Button style={{width: 50, height: 50, backgroundColor: 'powderblue', fontSize: 10, margin:20, font: 'unescape'}}
              
              title="نسيت كلمة المرور؟"
              
              onPress={() => this._handlePress()}>نسيت كلمة المرور؟</Button>
  
              
              <Button style={{width: 50, height: 50, backgroundColor: 'powderblue', fontSize:14, margin:20}} onPress={()=>
                  this.props.navigation.navigate ('signUp')} title="إنشاء حساب"/>
              
              </ScrollView>
              
               
              
              </View>
         
            
            
        );
    }
}

export default sulta;
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