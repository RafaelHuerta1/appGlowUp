import React from "react";
import { View, Text, Button } from "react-native";
import { Link, router } from 'expo-router';

function SignUp() {


    const goIniciarSesion = () => {
        console.log("Iniciar Sesion");
        router.push("/SignIn");
      };


  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 350,
        width: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 22,
          fontWeight: "300",
          textAlign: "center",
          marginTop: 0,
          width: "80%",
        }}
      >
        Estas a un paso de comenzar tu glow up.
      </Text>

      <View
        style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 20,
            width: "50%",
        }}
        >
        <Button title="Continuar con Google" />
        </View>

        <View
        style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 40,
            width: "80%",
        }}
       
        >
                        <Text style={{fontSize:20}}>Tienes cuenta? {' '}
                        <Text style={{ color:'blue', textDecorationLine:"underline", fontSize:20 }}
                        
                        onPress={ goIniciarSesion  }
                        >Iniciar Sesion</Text>
                        
                        </Text>
                     </View>
    </View>
  );
}

export default SignUp;
