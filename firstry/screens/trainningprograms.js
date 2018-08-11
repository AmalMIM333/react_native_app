import React, {Component} from "react";

import {
  AppRegistry, StyleSheet, Text, View, Image, Button, TextInput, ScrollView
    } from "react-native";


class trainningprograms extends Component {
    render(){
        return(
<View style={{backgroundColor:'#f2f2f2', flex:1}}>
  
   
  

  
  <Text style={{textAlign: 'right',fontSize: 18, margin: 19, marginBottom: 30}}>البرامج التدريبية </Text>
  
   
  
  <ScrollView>
   

  
  <Image
          style={styles.logoo}
          source={{uri: 'https://preview.ibb.co/guRXRU/Developer.jpg'}}
        />
  
  <Text style={{textAlign: 'right',fontSize: 16, marginRight:19, marginLeft: 19, marginBottom: 10}}>المستكشف</Text>
  
   
  
  <Text style={{textAlign: 'right',fontSize: 14, marginRight: 19, marginLeft: 19, marginBottom: 30}}> يركّز هذا المسار على إعطاء المتدرّب فرصةً لاكتشافِ العديد من الأشياء، مثل لينكس و سطر الأوامر و وأساسيّات الشبكة، والمبادرة والمساهمة في مجتمع الإنترنت، وغير ذلك</Text>
  
   
  

  <Button onPress={()=>
                this.props.navigation.navigate ('expSkills')} title="المهارات المطلوب اجتيازها"/>
                
   <Button onPress={()=>
                this.props.navigation.navigate ('expSkills')} title="الإنضمام للدورة"/>
  
  
  
  <Image
          style={styles.logoo}
          source={{uri: 'https://preview.ibb.co/guRXRU/Developer.jpg'}}
        />  
  <Text style={{textAlign: 'right',fontSize: 16, marginRight: 19, marginLeft: 19, marginBottom: 10}}>المطور</Text>
  
   
  
  <Text style={{textAlign: 'right',fontSize: 14, marginRight: 19, marginLeft: 19, marginBottom: 30}}>تكمنُ الفكرة في هذا المسار إلى تمكين المتدرّب من بناء التطبيقات، سواءً كانت للويب أو للجوّال، وسواءً كانت صغيرةً أو كبيرةً، وإلى تعريف المتدرّب بمفاهيم الحوسبة دون خادم، وإلى فتح أبواب الإبتكار والتبنّي للتقنيّات والمنصّات</Text>
  
   
  
           
 
  
  <Button onPress={()=>
                this.props.navigation.navigate ('devSkill')} title="المهارات المطلوب اجتيازها"/>
                
   <Button onPress={()=>
                this.props.navigation.navigate ('devSkill')} title="الإنضمام للدورة"/>
  
  <Image
          style={styles.logoo}
          source={{uri: 'https://preview.ibb.co/guRXRU/Developer.jpg'}}
        />  
  <Text style={{textAlign: 'right',fontSize: 16, marginRight: 19, marginLeft: 19, marginBottom: 10}}>المحلل</Text>
  
   
  
  <Text style={{textAlign: 'right',fontSize: 14, marginRight: 19, marginLeft: 19, marginBottom: 30}}>يهدفُ المسار إلى تمكين المتدرّب من تحليل وتصميم الأنظمة من خلال تحليل حالةٍ معيّنة وحلّ المشاكل المعقّدة المرتبطة بها، ثمّ ترجمة الحلّ إلى مخطّط تحليل الأعمال، يسعى المسار أيضًا إلى أن يمتلك المتدرّب المهارات ذات العلاقة بتجربة المستخدم و واجهة المستخدم</Text>
  
   

  

     <Button onPress={()=>
                this.props.navigation.navigate ('analystskills')} title="المهارات المطلوب اجتيازها"/>
                
   <Button onPress={()=>
                this.props.navigation.navigate ('analystskills')} title="الإنضمام للدورة"/>
  <Image
          style={styles.logoo}
          source={{uri: 'https://preview.ibb.co/guRXRU/Developer.jpg'}}
        />  
  <Text style={{textAlign: 'right',fontSize: 16, marginRight: 19, marginLeft: 19, marginBottom: 10}}>المخترق</Text>
  
   
  
  <Text style={{textAlign: 'right',fontSize: 14, marginRight: 19, marginLeft: 19, marginBottom: 30}}>يهدفُ المسار إلى تقديم أساسيّات الإختراق الأخلاقي للمتدرّب، إضافةً إلى تقنيّاتٍ في اختراق التطبيقات دون الخادم</Text>
  
   
 
              
           

   <Button onPress={()=>
                this.props.navigation.navigate ('expSkills')} title="المهارات المطلوب اجتيازها"/>
                
   <Button onPress={()=>
                this.props.navigation.navigate ('expSkills')} title="الإنضمام للدورة"/>
  
  </ScrollView>
  
   
  
  </View>
  
        );
    }
}

export default trainningprograms;







  
  
  
  
  
  
  

  
   
  
  const styles = StyleSheet.create({
  
  logo:{
  
  marginTop: 60,
  
  margin: 10,
  
  height: 128,
  
  width: 128,
  
//   textAlign: 'center'
alignSelf: 'center'

  
  },
  photo:{
  
  marginTop: 30,
  
  marginBottom: 20,
  
  marginLeft: 50,
  
  height: 150,
  
  width: 280,
  
  },
  logoo:{
        
        
    marginTop: 80,
    height: 128,
    
    width: 350,
    backgroundColor:'#545267',
    alignSelf: 'center',
    marginBottom:50
    }
   
  
  });
  
   
  
  



