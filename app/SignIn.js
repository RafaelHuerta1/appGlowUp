import React from "react";
import { View, Text, Button } from "react-native";
import { router } from "expo-router";

function SignIn() {
  const createCuentaGo = () => {
    console.log("Crear cuenta");
    router.push("/signUp");
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
          fontSize: 20,
          fontWeight: "500",
          textAlign: "center",
          marginTop: 0,
          width: "80%",
        }}
      >
        Bienvenido de nuevo
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
        <Button title="Iniciar Session" />
      </View>
      <Text
        style={{
          marginTop: 15,
          fontSize: 22,
          width: "80%",
          textAlign: "center",
          fontStyle: "italic",
          fontWeight: "400",
        }}
        onPress={createCuentaGo}
      >
        No tienes cuenta?{" "}
        <Text
          style={{
            color: "blue",
            textDecorationColor: "#00B4D8",
            textDecorationLine: "underline",
            fontSize: 20,
          }}
        >
          Crear Cuenta
        </Text>
      </Text>
    </View>
  );
}

export default SignIn;
