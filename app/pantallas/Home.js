import React from "react"
import { View, Text } from "react-native"

function Home() {
    return (
        <View>
                <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    width: '100%', // in web is fine 30% maybe 40%
                    marginTop:100,
                }}
                >
                <Text
                 style={
                    {
                    fontSize: 20,
                    }
                 }
                >Antes De Comenzar Elije Tus Objetivos</Text>
            </View>
        </View>
    )
}
export default Home;