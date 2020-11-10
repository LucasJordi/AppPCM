import {Armazenamento} from './context/context'
import React, { useState ,useContext,useEffect} from 'react';
import { StyleSheet,TextInput, Text, View } from 'react-native';
import {firebase}  from './firebase/config'

import {styles} from './styles'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';





export function ordem({ route }){

  const {item}=route.params;
  const [proced,setproced]=useState(item.procedimento)  
    

  const {login} =useContext(Armazenamento)  
    
  
    return (
     
      <View style={[styles.container]}>
          <Text>{'Ordem de manutenção numero: ' +item.numero}</Text>
          <Text>{'Título: ' +item.titulo}</Text>
          <Text>{'Equipe: ' +item.equipe}</Text>
          <Text>{login}</Text>




          <Text>{'Procedimento: '}</Text>
          <TextInput value={proced} onChangeText={(text)=>{setproced(text)}}/>
        
        
        
        
        
     
      </View>
    );
}
  
