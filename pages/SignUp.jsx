import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import LoginHeader from '../components/LoginHeader';

import ButtonInput from '../components/ButtonInput';
import {useNavigation} from '@react-navigation/native';
import LoginInput from '../components/LoginInput';
import PasswordInput from '../components/PasswordInput';
import { Checkbox } from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SignUp = ({onLogin}) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = React.useState(false);
  return (
    <View
      style={styles.imageBackground}>
      <LoginHeader />
      <View style={styles.container}>
        <View style={styles.logincontainer}>
          <View>
            <Text style={styles.welcomeText}>Create your account </Text>
            <LoginInput 
            placeholder={"Your Email"}
            placeholderColor={"black"}
         
            setValues={(text) => setEmail(text)}
            title={'Email'}
            />
            <PasswordInput
            placeholder={"Password"}
            placeholderColor={"black"}
            title={'Password'}
            setValues={(text) => setPassword(text)}
            pass={true}
            
            />
            <PasswordInput
            placeholder={"Confirm Password"}
            placeholderColor={"black"}
            title={'Confirm Password'}
            setValues={(text) => setPassword(text)}
            pass={true}
            
            />
          </View>
          <View style={{display:'flex',alignItems:'center',justifyContent:'space-around',
          flexDirection:'row', padding:20}}>
      
            <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color='black'
            onPress={() => {
              setChecked(!checked);
            }}
            /> 
          <Text style={{paddingLeft:10,color:'white'}}>I accept the terms and privacy policy
             
               </Text>
            </View>
          <View style={styles.buttonContainer}>
            <ButtonInput title={'SignUp'} onPress={()=>navigation.navigate('ProfileFields')}/>
          </View>
      
        </View>
      </View>
    </View>
  );
};

export default SignUp;

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
    height: windowHeight * 0.6,
    
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
});