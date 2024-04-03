import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icons from './Icons'

import { useNavigation } from '@react-navigation/native'

const LoginHeader = () => {
    const navigation = useNavigation()
  return (
    <View>
<TouchableOpacity onPress={()=>navigation.goBack()}>

<Icons.Ionicons name="arrow-back" style={{color:"white"}} size={27}/>

</TouchableOpacity>
    </View>
  )
}

export default LoginHeader

const styles = StyleSheet.create({})