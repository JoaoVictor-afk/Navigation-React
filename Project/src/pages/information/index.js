import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function information({route}){
    <View style={{marginTop:60}}>

        <Text>Nome:{route.params.nome}</Text>
        <Text>Telefone:{route.params.telefone}</Text>
        <Text> Email:{route.params.email}</Text>
        
    
    </View>
    }