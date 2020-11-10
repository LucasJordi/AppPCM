
import React, { useState ,useEffect, useContext} from 'react';

import {Armazenamento} from './context/context'
import {ArmazenamentoProvider} from './context/context'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {todasordens} from './todasordens'
import {ordem} from './ordem'
import {addordem} from './addordem'
import {home} from './home'



const Drawer = createDrawerNavigator();






function App() {
  const {login}=useContext(Armazenamento)
  return (

    
    <NavigationContainer>
      <ArmazenamentoProvider >
        <Drawer.Navigator>
          <Drawer.Screen options={{ title: 'Início' }} name="Home" component={home} />
          <Drawer.Screen name="Ordens de manutenção" component={todasordens} />
          <Drawer.Screen name="Ordem" component={ordem} />
          
          <Drawer.Screen name="AddOrdem" component={addordem} />
        </Drawer.Navigator>
      </ArmazenamentoProvider>
    </NavigationContainer>
    
  );
}

export default App;



  