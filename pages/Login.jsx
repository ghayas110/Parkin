import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import LoginHeader from '../components/LoginHeader';

import PhoneNoInput from '../components/PhoneNoInput';
import ButtonInput from '../components/ButtonInput';
import {useNavigation} from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Login = ({onLogin}) => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../images/loginimage.png')}
      style={styles.imageBackground}>
      <LoginHeader />
      <View style={styles.container}>
        <View style={styles.logincontainer}>
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.subheading}>Find Your Parking</Text>

            <PhoneNoInput />
          </View>

          <View style={styles.buttonContainer}>
            <ButtonInput title={'Login'} />
            <TouchableOpacity
              style={{color: 'white'}}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                Dont have an Account ?
                <Text
                  style={{color: '#01DBB6', textDecorationLine: 'underline'}}>
                  SignUp
                </Text>
              </Text>
            </TouchableOpacity>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <TouchableOpacity
                style={{color: 'white',padding:10}}
                onPress={() => navigation.navigate('SignUp')}>
                <Image
                  style={styles.logo}
                  source={require('../images/facebook.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{color: 'white',padding:10}}
                onPress={() => navigation.navigate('SignUp')}>
                <Image
                  style={styles.logo}
                  source={require('../images/google.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{color: 'white',padding:10}}
                onPress={() => navigation.navigate('SignUp')}>
                <Image
                  style={styles.logo}
                  source={require('../images/apple.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // Other container styles
  },
  imageBackground: {
    flex: 1,

    backgroundColor: '#01505F',
    padding: 20,
  },
  welcomeText: {
    fontSize: 40,
    fontFamily:'Montserrat',
    color: '#fff',
    // Other text styles
  },
  subheading: {
    fontSize: 18,
    color: '#fff',
    // Other text styles
  },
  logincontainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: windowHeight * 0.4,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
});
