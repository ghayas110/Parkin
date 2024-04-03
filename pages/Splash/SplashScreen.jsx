import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
const SplashScreen = () => {
    const navigation =useNavigation()
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('Language')
      }, 3000); // Navigate to Home screen after 10 seconds
    }, [navigation]);
  
    return (
      <View style={styles.container}>
        <Image style={styles.logo}
        source={require('../../images/logo.png')}
      />
    <LottieView source={require('../../images/lotiefiles/loader.json')} autoPlay loop  style={{width:100,height:100,color:"green"}} />
    </View>
  );
};

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:'#01505F'
      },
})