import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ButtonInput from '../components/ButtonInput';
import Icons from '../components/Icons';
import { useNavigation } from '@react-navigation/native';

const CarDetails = () => {
    const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const navigation =useNavigation()
  return (
    <View style={{flex:1,backgroundColor:'#01505F'}}>
    <View
    style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: windowWidth,
      padding: 10,
    }}>
    <TouchableOpacity style={{width: 50}}>
    <Icons.Ionicons name="arrow-back" size={24} color="white" />
  </TouchableOpacity>
    <Text style={{color: 'white'}}>1 of 4</Text>
<ButtonInput style={{width:windowWidth*0.2}} title="Done" onPress={() => {navigation.navigate('Calender')}}/>
  </View>
  <View style={{display:'flex',alignItems:'center',justifyContent:'center',height:'80%'}}>
  <Image source={require('../images/park3.png')} style={{width:windowWidth*0.8}}/>
  </View>
    </View>
  )
}

export default CarDetails

const styles = StyleSheet.create({})