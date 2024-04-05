import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

import Icon from 'react-native-vector-icons/AntDesign';
import Icons from './Icons';

const PasswordInput = ({placeholder,placeholderColor,setValues,icon,pass,title}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <>

    <Text style={{color: "white",paddingVertical:10}}>{title}</Text>

    <View style={styles.searchContainer}>
  
    <Icon name={icon} size={20} color="orange" />

    <TextInput
    style={styles.input}
    placeholder={placeholder}
    placeholderTextColor={placeholderColor}
    onChangeText={setValues}
    secureTextEntry={!isPasswordVisible}
    
  />
  <TouchableOpacity style={styles.icon} onPress={togglePasswordVisibility}>
  <Icons.MaterialCommunityIcons name={isPasswordVisible ? 'eye' : 'eye-off'} size={20} color="#000" />
</TouchableOpacity>
  </View>
  </>
  )
}

export default PasswordInput

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
       backgroundColor:'white',
        paddingHorizontal: 5,
        width:"80%",
     
        borderRadius:10,
        borderColor:'black',
        borderWidth:StyleSheet.hairlineWidth
      },
      input: {
        marginLeft: 10,
        flex: 1,
        color:'black'
      },
})