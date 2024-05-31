import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ButtonPerso from './componentes/ButtonPerso';
import React, { useState, useEffect } from 'react';
import { Link, router } from 'expo-router';

const imgFondoUno = require('./assets/img1Women.jpg');
const imgFondoDos = require('./assets/img2.jpg');




export default function App() {

  const [image, setImage] = useState(imgFondoDos);

  useEffect(() => {
    const timer = setInterval(() => {
      setImage(prevImage => prevImage === imgFondoDos ? imgFondoUno : imgFondoDos);
    }, 3000); 

    return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  return (
    <View style={styles.container}>
      
      <Image source={image} style={{width: '100%', height: 400,
      position: 'absolute', top: 23, left: 0
        
      }} />


      <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      >
      <Text
      style={{
        fontSize: 20,
        textAlign: 'center',
        marginTop:360,
      }}
      >
        Descubre tu brillo, transforma tu apariencia. Con nuestra aplicación, el camino hacia la belleza nunca ha sido tan accesible. 
      </Text>
      {''}
      <Text
       style={{
        fontSize: 20,
        textAlign: 'center',
        marginTop:0,
        fontStyle: 'italic',
        fontWeight: 'bold',
      }}
      >
        Empieza tu viaje de ‘glow up’ hoy.
      </Text>

      </View>

      <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 40,
      }}
      >
       

          <ButtonPerso
      texto="Iniciar Sesión"
      color="blue"
      fcRuta='/SignIn'
      />

      
       <ButtonPerso
      texto="Crear Cuenta"
      color="blue" // morado claro #d8b4fe
      fcRuta='/signUp'
      />
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
