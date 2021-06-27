import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import contacts from "./src/pages/contacts"
import information from "./src/pages/information/"
import AppContacts from './src/pages/Appcontacts';

const Stack = createStackNavigator();
const Tab= createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="AppContacts" component={AppContacts}></Tab.Screen>
      <Tab.Screen name="Contacts" component={contacts}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="AppContacts" component={AppContacts}/>

      <Stack.Screen name="Information" component={information}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

