import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import LoginHeader from '../components/LoginHeader'

import PhoneNoInput from '../components/PhoneNoInput'
import ButtonInput from '../components/ButtonInput'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Login = ({onLogin}) => {
  return (
      <ImageBackground source={require('../images/loginimage.png')} style={styles.imageBackground} >
        <LoginHeader/>
        <View style={styles.container}>
       

         
<View>

          <Text style={styles.welcomeText}>Welcome</Text>
<Text style={styles.subheading}>Find Your Parking</Text>

          <PhoneNoInput/>
</View>
<
        <ButtonInput title={"Login"}/>
      
 </View>
      </ImageBackground>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    height:'100%',
    display:'flex',
    alignItems:"center",
    justifyContent:'center'
    // Other container styles
  },
  imageBackground: {
    flex: 1,

    backgroundColor:'#01505F',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    // Other text styles
  },
  subheading: {
    fontSize: 18,
    color: '#fff',
    // Other text styles
  },
  logincontainer:{
    display:'flex',
    alignItems:'center',
    justifyContent:"space-around",
    height:windowHeight*0.4
  }
})
