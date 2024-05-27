import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ButtonPerso from './componentes/ButtonPerso';
import React, { useState, useEffect } from 'react';

const imgFondoUno = require('./assets/img1.jpg');
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
      
      <Image source={image} style={{width: 500, height: 400,
      position: 'absolute', top: 50, left: 0
        
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
      accion={() => console.log('Iniciar Sesión')}
      color="blue"
      ruta="/signIn/SingIn"
      />

      
       <ButtonPerso
      texto="Crear Cuenta"
      accion={() => console.log('Iniciar Sesión')}
      color="#d8b4fe" // morado claro #d8b4fe
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
