import React from 'react'
import {Text, View, TouchableOpacity } from 'react-native';
import { Link,router } from 'expo-router';


function ButtonPerso({texto, color, fcRuta}) {

  const goPersonalizar = () => {
    console.log("Personalizar");
    router.push(fcRuta);
  }
    
    return (
        <View
        style={{
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: 20,
            width: 'auto',
        }}
        >
        
            <TouchableOpacity
            style={{
                backgroundColor: color,
                padding: 12,
                borderRadius: 12,
                marginTop: 2,
                width: 300,
                alignSelf: 'center',
             //   marginBottom: 12,
            }}
            onPress={goPersonalizar}
            >
                <Text
                style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                }}
                >
                    {texto}
                </Text>
            </TouchableOpacity>
        </View>

    )
}


export default ButtonPerso