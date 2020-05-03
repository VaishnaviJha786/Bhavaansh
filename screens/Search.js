import React,{useState} from 'react';
import { Appbar, Title, TextInput } from 'react-native-paper';
import {View, Text} from 'react-native';
import Header from './Header';
export default Search=()=>
{ const [city,setCity]=useState('')
    return (
      <View style={{flex:1}}>
        <TextInput
          label='city name'
          theme={{colors:{primary:'#0b0'}}}
          value={city}
          onChangeText={(text)=>setCity(text)} />

      </View>
    );
  
}