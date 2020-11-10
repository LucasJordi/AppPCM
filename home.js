
import React, { useState ,useEffect, useContext} from 'react';
import { StyleSheet,Image,TouchableOpacity,Button,FlatList, Text, View ,LogBox} from 'react-native';
import {firebase}  from './firebase/config'
import {styles} from './styles'
import { useFonts, Roboto_700Bold_Italic } from '@expo-google-fonts/roboto';
import * as Font from 'expo-font';
import {Armazenamento} from './context/context'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';





export function home({ navigation }){
    
    
    
    const [teste,settest]=useState([])
  
    let [fontsLoaded] = useFonts({
        Roboto_700Bold_Italic: require('./assets/fonts/Roboto-Black.ttf')
    });
    
    if (!fontsLoaded) {
        return null;
    }
      
    
      
    
    
    
    
  
    return (
     
      <View style={[styles.container]}>

        <View style={{backgroundColor:'white',height:100,elevation:10,justifyContent:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>

                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Image source={require('./icons/menu.png')}/>
                </TouchableOpacity>
                
                <Text style={{fontFamily:'Roboto_700Bold_Italic'}}>Bem vindo</Text>

            </View>
            

            
        </View> 




        <View style={{alignItems:'center'}}>
            <View style={{backgroundColor:'white',width:'97%',borderRadius:20,elevation:10,height:150,marginTop:10}}>
                <Text>Ordens abertas</Text>
            </View>  


            <View style={{backgroundColor:'white',width:'97%',borderRadius:20,elevation:10,height:300,marginTop:10}}>
                <Text>Ordens abertas</Text>
            </View>

        </View>
        
          
            
        
          
           
      </View>
    );
}
  
