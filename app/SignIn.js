import React, {useEffect, useState} from "react";
import { View, Text, Button } from "react-native";
import { router } from "expo-router";

import * as WebBrowser from 'expo-web-browser';

import * as Google from 'expo-auth-session/providers/google';

import AsyncStorage from "@react-native-async-storage/async-storage";

// id android: 437389181662-lqe6iok69q93uq3o4puv08cbcbph815n.apps.googleusercontent.com
// id web: 437389181662-lqe6iok69q93uq3o4puv08cbcbph815n.apps.googleusercontent.com


WebBrowser.maybeCompleteAuthSession();

function SignIn() {
  const createCuentaGo = () => {
    console.log("Crear cuenta");
    router.push("/signUp");
  };

  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState("");

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "437389181662-lqe6iok69q93uq3o4puv08cbcbph815n.apps.googleusercontent.com",
    //iosClientId: "",
    webClientId: "437389181662-3unf848vk7rfno1i7ohii6o65c522oh3.apps.googleusercontent.com",
  });
    
  useEffect(() => {
    handleEffect();
  }, [response, token]);

  async function handleEffect() {
    const user = await getLocalUser();
    console.log("user", user);
    if (!user) {
      if (response?.type === "success") {
        // setToken(response.authentication.accessToken);
        getUserInfo(response.authentication.accessToken);
        console.log("loaded from google");
        router.push("/pantallas/Home");
      }
    } else {
      setUserInfo(user);
      console.log("loaded locally");
      router.push("/pantallas/Home");
    }
  }
  const getLocalUser  = async () => {
    const data = await AsyncStorage.getItem("@user");
      if (!data) {
        return null;
      }
      return JSON.parse(data);
  }



  // fetch api de google
  const getUserInfo = async (token) => {
    if(!token) return null;
     try {
        const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
            headers: { Authorization: `Bearer ${token}` },
        });
        const user = await response.json();
        await AsyncStorage.setItem('@user', JSON.stringify(user));
        setUserInfo(user);

    }catch (e) {
        console.error(e);
    }

}

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
        <Button title="Iniciar Session"    disabled={!request}
          onPress={() => {
            promptAsync();
          }} />
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
