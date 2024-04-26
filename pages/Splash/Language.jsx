import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Alert,
} from 'react-native';
import React from 'react';
import SegmentSelect from '../../components/SegmentSelect';
import {SegmentedButtons} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonInput from '../../components/ButtonInput';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Language = ({onLogin}) => {
  const [value, setValue] = React.useState('');

  const navigation = useNavigation();
  const handleChange = async () => {
    try {
      // if(value){

      navigation.navigate('Login');
      // }else{
      //   Alert.alert("Please Select Language")
      // }
      await AsyncStorage.setItem('data', value);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  return (
    <ImageBackground
      source={require('../../images/welcome.png')}
      style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 28,
            textAlign: 'center',
            width: windowWidth * 0.7,
            fontFamily: 'Montserrat',
            marginBottom: 25,
            padding: 15,
          }}>
          <Text style={{color: '#01DBB6'}}>Find</Text> the cheapest, closest
          parking to your<Text style={{color: '#01DBB6'}}> destination.</Text>
        </Text>
        {/* <PhoneNoInput/> */}
        {/* <SegmentedButtons style={{padding:20}}
        value={value}
        onValueChange={setValue}
      
        theme={{ colors: { onSurface: 'white',outline:"white" } }}
        buttons={[
        
          {
            value: 'en',
            label: 'English',
          },
          { value: 'fr', label: 'Arabic' },
        ]}
      /> */}
        <ButtonInput
          title={'Lets Park'}
          style={{backgroundColor: '#01505F'}}
          onPress={() => handleChange()}
        />
      </View>
    </ImageBackground>
  );
};

export default Language;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
});