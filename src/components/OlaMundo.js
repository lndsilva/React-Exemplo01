import React from 'react';
import {Text, View} from 'react-native';
import Estilo from './estilo'

const OlaMundo = () =>{
    return (
        <View>
            <Text style={Estilo.txtG}>Olá, mundo!!!</Text>
        </View>
    )
}
export default OlaMundo