
import React, { useState ,useEffect} from 'react';
import { StyleSheet,Alert,TextInput, Button,Text, View } from 'react-native';
import {firebase}  from './firebase/config'

import {styles} from './styles'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';





export function addordem({ navigation }){
    const [numero,setnumero]=useState({numero:'',titulo:'',equipe:'',semana:'',status:'',procedimento:''})
    const [titulo,settitulo]=useState('')
    const [equipe,setequipe]=useState('')
    const [semana,setsemana]=useState('')
    const [status,setstatus]=useState('')
    const [procedimento,setprocedimento]=useState('')
    
 
    const storeHighScore=(numero1,titulo1,equipe1,semana1,status1,procedimento1)=>{
        firebase
          .database()
          .ref('OM/' + numero1)
          .set({

            finalizada: 'false',
           
            
            
            status: status1,
            procedimento: procedimento1,
            semana: semana1,
            equipe: equipe1,
            titulo: titulo1,            
            numero: numero1,
          });

        Alert.alert('Ordem adicionada')
        navigation.goBack()
    }

     
    
  
    return (
     
      <View style={[styles.container]}>
          <Text>{'Numero: '}</Text>
          <TextInput  keyboardType={'numeric'} onChangeText={(text)=>{setnumero(text)}}/>
          <Text>{'Título: '}</Text>
          <TextInput  onChangeText={(text)=>{settitulo(text)}}/>
          <Text>{'Equipe: ' }</Text>
          <TextInput  onChangeText={(text)=>{setequipe(text)}}/>
          <Text>{'Semana: ' }</Text>
          <TextInput  onChangeText={(text)=>{setsemana(text)}}/>
          <Text>{'Status: ' }</Text>
          <TextInput  onChangeText={(text)=>{setstatus(text)}}/>
          <Text>{'Procedimento: '}</Text>
          <TextInput  onChangeText={(text)=>{setprocedimento(text)}}/>




          <Button
            onPress={()=>storeHighScore(numero,titulo,equipe,semana,status,procedimento)}
            title="Salvar"
            color="#841584"
            
          />
          


          
          
        
        
        
        
        
     
      </View>
    );
}
  


