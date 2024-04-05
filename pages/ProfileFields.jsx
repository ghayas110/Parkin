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
  
  import PhoneNoInput from '../components/PhoneNoInput';
  import ButtonInput from '../components/ButtonInput';
  import {useNavigation} from '@react-navigation/native';
  import LoginInput from '../components/LoginInput';
  import PasswordInput from '../components/PasswordInput';
  import { Checkbox } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const ProfileFields = ({onLogin}) => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const availabilty = ["No","Yes"]
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = React.useState(false);
    return (
      <View
        style={styles.imageBackground}>
        <LoginHeader />
        <View style={styles.container}>
          <View style={styles.logincontainer}>
            <View>
              <Text style={styles.welcomeText}>Fill your profile </Text>
              <LoginInput 
              placeholder={"Full Name"}
              placeholderColor={"black"}
              setValues={(text) => setName(text)}
     
              />  
             
              <LoginInput 
              placeholder={"Nick name"}
              placeholderColor={"black"}
              setValues={(text) => setEmail(text)}
     
              />
              <LoginInput 
              placeholder={"DOB"}
              placeholderColor={"black"}
              setValues={(text) => setDob(text)}
     
              />
              <LoginInput 
              placeholder={"Email"}
              placeholderColor={"black"}
              setValues={(text) => setEmail(text)}
     
              />
        <PhoneNoInput/>
        <LoginInput 
        placeholder={"Gender"}
        placeholderColor={"black"}
        setValues={(text) => setDob(text)}

        />
            </View>
          
            <View style={styles.buttonContainer}>
              <ButtonInput title={'SignUp'} />
            </View>
        
          </View>
        </View>
      </View>
    );
  };
  
  export default ProfileFields;
  
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

      
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
  });