import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function context({navigation}){
    <View style={{marginTop:60}}>
        <View> 
            <Text>João Victor
            </Text>
            <Text onPress={()=> navigation.navigate("Information",{
                nome:" João Victor Peixoto De Souza",
                telefone:" 81306494",
                email:"joao.souza@redes.ufsm.br"
            }
            )}>
                Information...
            </Text>
        </View>

        <View style={{marginTop:20}}>     
            <Text>Nicole</Text>
            <Text onPress={()=> navigation.navigate("Information",{
                nome:" Nicole Spelocin",
                telefone:" 999999999",
                email:""
            })}>
                Information...
            </Text>
        </View> 
    </View>

}