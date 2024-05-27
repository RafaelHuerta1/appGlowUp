import React from 'react'
import {Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';


function ButtonPerso({texto, accion, color, ruta}) {

    console.log(ruta)
    return (
        <View>
         {ruta ? (
            <Link href={ruta} asChild>
            <TouchableOpacity
            onPress={accion}
            style={{
              backgroundColor: color,
              padding: 10,
              borderRadius: 10,
              width: 300,
              alignItems: 'center',
              marginTop:10,
              marginLeft: 10,
              marginBottom: 10,
            }}
            >
            <Text
            style={{
              fontSize: 20,
              color: 'white',
            }}
            >
              {texto}
            </Text>
            </TouchableOpacity>
            </Link>
        ) : (
            <TouchableOpacity
            onPress={accion}
            style={{
              backgroundColor: color,
              padding: 10,
              borderRadius: 10,
              width: 300,
              alignItems: 'center',
              marginTop:10,
              marginLeft: 10,
              marginBottom: 10,
            }}
            >
            <Text
            style={{
              fontSize: 20,
              color: 'white',
            }}
            >
              {texto}
            </Text>
            </TouchableOpacity>
        )}
        </View>

    )
}


export default ButtonPerso