import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import PhoneNoInput from '../components/PhoneNoInput';
import ButtonInput from '../components/ButtonInput';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({onLogin}) => {
  const navigation = useNavigation();
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const toggleBottomSheet = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };
  const handleButtonPress = () => {
    setBottomSheetVisible(true);
    // setModalVisible(true)
  };
  const handleModalPress = () => {
    // setBottomSheetVisible(true);
    setModalVisible(true);
    setBottomSheetVisible(false);
  };

  return (
    <ImageBackground
      source={require('../images/loginimage.png')}
      style={styles.imageBackground}>
      {/* Your Login Header */}
      <View style={styles.container}>
        <View style={styles.logincontainer}>
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.subheading}>Find Your Parking</Text>

            <PhoneNoInput />
          </View>

          <View style={styles.buttonContainer}>
            <ButtonInput title={'Login'} onPress={handleButtonPress} />
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
                style={{color: 'white', padding: 10}}
                onPress={() => navigation.navigate('SignUp')}>
                <Image
                  style={styles.logo}
                  source={require('../images/facebook.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{color: 'white', padding: 10}}
                onPress={() => navigation.navigate('SignUp')}>
                <Image
                  style={styles.logo}
                  source={require('../images/google.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{color: 'white', padding: 10}}
                onPress={() => navigation.navigate('SignUp')}>
                <Image
                  style={styles.logo}
                  source={require('../images/apple.png')}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                marginHorizontal: 20,
                lineHeight: 18,
                padding: 20,
              }}>
              By Clicking “Sign In You Agree With{' '}
              <Text style={{fontWeight: 'bold'}}>Terms And Conditions</Text> And
              You Are At Least 18 Years Old”
            </Text>
          </View>
        </View>
      </View>

      {/* Bottom Sheet */}
      <Modal
        isVisible={bottomSheetVisible}
        style={{
          margin: 0,
          backfaceVisibility: 'visible',
          backgroundColor: 'transparent',
        }}
        onBackdropPress={toggleBottomSheet}
        backdropColor="transparent">
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 40,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              
            }}>
            <View>
              <TouchableOpacity
                onPress={handleModalPress}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <Image source={require('../images/magic.png')} />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                    textAlign: 'center',
                    color: '#01505F',
                    paddingLeft:8
                    

                  }}>
                  Magic Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal */}
      <Modal isVisible={modalVisible}>
        <View style={styles.modalContainer}>
          {/* Your Modal Content */}
          <Image source={require('../images/mail.png')} />
          <Text style={{padding: 10}}>Email has been sent</Text>
          <ButtonInput
            title={'Got it'}
            onPress={() => {
              navigation.navigate('Marhaba');
              setModalVisible(false);
            }}
          />
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
    backgroundColor: '#01505F',
    padding: 20,
  },
  welcomeText: {
    fontSize: 40,
    fontFamily: 'Montserrat',
    color: '#fff',
  },
  subheading: {
    fontSize: 18,
    color: '#fff',
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
  bottomSheetContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default Login;
