import { Dimensions, Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import ButtonInput from '../components/ButtonInput';
import Modal from 'react-native-modal';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Marhaba = ({onLogin}) => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const toggleBottomSheet = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };
  const handleButtonPress = () => {
    setBottomSheetVisible(true);
    // setModalVisible(true)
    console.log("sssx")
  };
  return (
    <>

    <View
    style={styles.imageBackground}>
 
    <View style={styles.logincontainer}>
    <View>
    <View style={styles.uperdomain}>
    <Text style={styles.welcomeText}>Marhaba </Text>
    <Text style={styles.welcomeText1}>You can use the app after adding a license plate. your device must have a uAE phone number form Etisalat or Du. </Text>
    
    </View>
    <ButtonInput title={"Add Car"} style={{position:'absolute',top:90,left:100}} onPress={handleButtonPress}/>
    </View>
    <View>
    <View style={styles.imagecon}>
    <Image source={require('../images/mawaqif.png')} style={{width:100,height:120,borderRadius:30}}/>
    <Image source={require('../images/rta.png')}  style={{width:100,height:80,borderRadius:10}}/>
    </View>
    <View style={styles.imagecon}>
    <Image source={require('../images/mipd.png')} style={{width:100,height:100}}/>
    <Image source={require('../images/shariah.png')} style={{width:100,height:100}}/>
    </View>
    </View>

    </View>
 
    </View>
    <Modal
    isVisible={bottomSheetVisible}
    style={{margin: 0,backfaceVisibility:'visible',backgroundColor:'transparent'}}
    onBackdropPress={toggleBottomSheet}
    backdropColor='transparent'
    >
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 24,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        <View>
      
        <View  style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
        <Text
        style={{
          fontSize: 20,
          fontWeight: '200',
          textAlign:'center',
          color:"#01505F"
        }}>
        Magic Login
        </Text>
        </View>
        </View>
       

      </View>
    </View>
  </Modal>
  </>
  )
}

export default Marhaba

const styles = StyleSheet.create({
    imagecon:{
display:'flex',
alignItems:'center',
justifyContent:'space-around',
flexDirection:'row',
width:windowWidth
    },
    imageBackground: {
        flex: 1,
    
        backgroundColor: '#01505F',
        padding: 20,
      },
      container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Other container styles
      },
      logincontainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    height:windowHeight*0.9
        
      },
      welcomeText: {
        fontSize: 20,
        fontFamily:'Montserrat',
        color: '#01DBB6',
        // Other text styles
      },
      welcomeText1: {
        fontSize: 13,
        fontFamily:'Montserrat',
        color: '#01DBB6',
        // Other text styles
      },
      uperdomain:{
        borderWidth:1,
        borderRadius:20,
        padding:20,
        borderColor:'#01DBB6',
      }
})