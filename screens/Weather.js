import React,{useState} from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Search from './Search';
import {TextInput, Button} from 'react-native-paper';
const Weather=({navigation})=>
{
    const [city,setCity]=useState('')
    const [cities,setCities]=useState([])
    const fetchCities =(text)=>
    {
        setCity(text)
        fetch("https://autocomplete.wunderground.com/aq?query="+text)
    }
    return (
      <View style={{flex:1}}>
        
          <TextInput
          label='city name'
          theme={{colors:{primary:'#0b0'}}}
          value={city}
          onChangeText={(text)=>fetchCities(text)} />
          <Button
          mode='contained'
          style={{backgroundColor:'#0b0',margin:20}}
          onPress={()=>console.log('Pressed')}>
              Search
          </Button>
      </View>
    );
}
export default Weather;