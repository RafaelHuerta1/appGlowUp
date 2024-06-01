import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ButtonPerso from './componentes/ButtonPerso';
import React, { useState, useEffect } from 'react';

const imgFondoUno = require('./assets/img1Women.jpg');
const imgFondoDos = require('./assets/img2.jpg');




export default function App() {

  //const [image, setImage] = useState(imgFondoDos);

  const lenguajeApp ={
      'es':'Descubre tu brillo, transforma tu apariencia. Con nuestra aplicación, el camino hacia la belleza nunca ha sido tan accesible.',
      'en':'Discover your glow, transform your appearance. With our app, the path to beauty has never been more accessible.'
   }
   const translateTwoMainHome = {
    'es':'Empieza tu viaje de ‘glow up’ hoy.',
    'en':'Start your glow up journey today.'
  }

  const titleTranslate = {
    'es':'Bienvenido a GlowFlow',
    'en':'Welcome to GlowFlow'
  }


  return (
    <View style={styles.container}>
      
    


      <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '80%', // in web is fine 30% maybe 40%
      }}
      >

    <Text
      style={{
        fontSize: 27,
        textAlign: 'center',
        marginBottom:20,
        fontWeight: 'bold',
        fontFamily: 'mono',
      }}
      >
        {titleTranslate['en']}
      </Text>

      <Text
      style={{
        fontSize: 20,
        textAlign: 'center',
        marginTop:0,
      }}
      >
        {lenguajeApp['en']}
      </Text>
      {''}
      <Text
       style={{
        fontSize: 20,
        textAlign: 'center',
        marginTop:10,
        fontStyle: 'italic',
        fontWeight: 'bold',
      }}
      >
        {translateTwoMainHome['en']}
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
      texto="Sign In"
      color="blue"
      fcRuta='/SignIn'
      />

      
       <ButtonPerso
      texto="Create Account"
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
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
