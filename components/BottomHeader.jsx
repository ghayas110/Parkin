import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

import Icons from './Icons'
import { useNavigation } from '@react-navigation/native'

const BottomHeader = ({title}) => {
    const navigation = useNavigation()
    return (
      <View>
  <TouchableOpacity onPress={()=>navigation.goBack()}>
  
  <Icons.Ionicons name="arrow-back" style={{color:"black"}} size={27}/>
  
  </TouchableOpacity>
  <Text style={{color:'black'}}>{title}</Text>
      </View>
  )
}

export default BottomHeader

const styles = StyleSheet.create({})