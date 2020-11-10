
import React, { useState ,useEffect, useContext} from 'react';
import { StyleSheet,Image,TouchableOpacity,Button,FlatList, Text, View ,LogBox} from 'react-native';
import {firebase}  from './firebase/config'
import {styles} from './styles'
import {Armazenamento} from './context/context'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';





export function todasordens({ navigation }){
    
    
    
    const [teste,settest]=useState([])
  
    
      
    useEffect(() => {
      async function dados(){firebase.database().ref('OM/').on('value', (snapshot) => {
        const li=[]
    
        snapshot.forEach((child)=>{
            li.push({numero:child.val().numero,titulo:child.val().titulo,procedimento:child.val().procedimento,equipe:child.val().equipe})
            

        })
            settest(li)

            LogBox.ignoreLogs(['Setting a timer']);
      });}
        
      dados()
     
    }, []);
      

    const onPressLearnMore=()=>{
     navigation.navigate('AddOrdem')
    }
    

    const {login,mudar}=useContext(Armazenamento)
    
  
    return (
     
      <View style={[styles.container]}>


        <View style={{backgroundColor:'white',height:100,elevation:10,justifyContent:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>

                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Image source={require('./icons/menu.png')}/>
                </TouchableOpacity>
                
                <Text>Bem vindo</Text>

            </View>
            

            
        </View> 
          <Text>Programação Semanal</Text>
          <Text></Text>


          <View  >
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginBottom:'3%'}} onPress={()=>navigation.navigate('AddOrdem')}>
              <Image source={require('./icons/plus-32.png')} />
              <Text style={{marginHorizontal:"5%"}}>Adicionar nova ordem</Text>
            </TouchableOpacity>



          </View> 
          
        
        
        
        <View style={{height:"80%"}}>
            
        
          <FlatList 
              
              data={teste}
              keyExtractor={item => item.numero}
              renderItem={({item})=>(
    
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Ordem',{item})}>
                  <Image source={require('./icons/engine1.png')} />
                  <Text style={styles.texto}>{item.numero }</Text>
                  <Text style={styles.texto}>{ item.titulo}</Text>
                  
                  
    
                </TouchableOpacity>
                
                  
                
    
              )}
            
            
            />
        </View>     
      </View>
    );
}
  
