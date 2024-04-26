import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import ButtonInput from '../components/ButtonInput';
import Modal from 'react-native-modal';
import BottomHeader from '../components/BottomHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icons from '../components/Icons';
import ImagePicker, {launchImageLibrary} from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Marhaba = ({onLogin}) => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [AddCarVisible, setAddCarVisible] = useState(false);
  const [vehicleImage, setVehicleImage] = useState(null);
  const [plateNumber, setPlateNumber] = useState('');
  const [nickname, setNickname] = useState('');
const navigation = useNavigation()
  const toggleBottomSheet = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };
  const handleButtonPress = () => {
    setAddCarVisible(!AddCarVisible)
    setBottomSheetVisible(true);
  };
  const toggleCarSheet = () => {
    setAddCarVisible(!AddCarVisible);
  };
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = city => {
    setSelectedCity(city);
  };
  const handleCarPress = () => {
    setAddCarVisible(true);
  };
  const  handleCarButtonPress = () => {
    setAddCarVisible(!AddCarVisible)
    onLogin()
  };
 
  const handlePlateNumberChange = text => {
    setPlateNumber(text);
  };

  const handleNicknameChange = text => {
    setNickname(text);
  };
  const handleImagePicker = async () => {
    try {
      const options = {
        title: 'Select Vehicle Image',
        mediaType: 'photo',
        quality: 0.5,
      };
      const result = await launchImageLibrary(options);
      if (!result.didCancel) {
        const source = {uri: result.assets[0].uri};
        setVehicleImage(result.assets[0].uri);
        console.log(result);
      }
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };
  return (
    <>
      <View style={styles.imageBackground}>
        <View style={styles.logincontainer}>
          <View>
            <View style={styles.uperdomain}>
              <Text style={styles.welcomeText}>Marhaba </Text>
              <Text style={styles.welcomeText1}>
                You can use the app after adding a license plate. your device
                must have a uAE phone number form Etisalat or Du.{' '}
              </Text>
            </View>
            <ButtonInput
              title={'Add Car'}
              style={{position: 'absolute', top: 90, left: 100}}
              onPress={handleCarPress}
            />
          </View>
          <View>
            <View style={styles.imagecon}>
              <Image
                source={require('../images/mawaqif.png')}
                style={{width: 100, height: 150, resizeMode: 'stretch'}}
              />
              <Image
                source={require('../images/rta.png')}
                style={{width: 100, height: 100, resizeMode: 'cover'}}
              />
            </View>
            <View style={styles.imagecon}>
              <Image
                source={require('../images/mipd.png')}
                style={{width: 100, height: 100, resizeMode: 'cover'}}
              />
              <Image
                source={require('../images/shariah.png')}
                style={{width: 100, height: 100, resizeMode: 'cover'}}
              />
            </View>
          </View>
        </View>
      </View>
      <Modal
        isVisible={bottomSheetVisible}
        style={{
          margin: 0,
          backfaceVisibility: 'visible',
          backgroundColor: 'transparent',
        }}
        onBackdropPress={toggleBottomSheet}
        backdropColor="transparent">
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
          }}>
          <ScrollView
            style={{
              flex: 1,
              backgroundColor: '#BFF6ED',
            }}>
            <View
              style={{
                backgroundColor: '#01505F',
              }}>
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  paddingTop: 27,
                  paddingBottom: 53,
                  marginTop: 119,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent:'space-between',
                    marginBottom: 26,
                    marginHorizontal: 24,
                  }}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icons.Ionicons
                      name="arrow-back"
                      style={{color: 'black'}}
                      size={27}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: '#01505F',
                      fontSize: 20,
                    }}>
                    {'Add Plate Number'}
                  </Text>
                  <View></View>
                </View>
                <Text
                  style={{
                    color: '#022830',
                    fontSize: 15,
                    marginBottom: 17,
                    marginHorizontal: 34,
                  }}>
                  {'Plate Source'}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F5F5F5',
                    borderRadius: 10,
                    paddingVertical: 15,
                    marginBottom: 15,
                    marginHorizontal: 24,
                  }}>
                  <TouchableOpacity
                    style={{
                      width: 105,
                      alignItems: 'center',
                      backgroundColor:
                        selectedCity === 'Dubai' ? '#01DBB6' : '#FFFF',
                      borderRadius: 10,
                      paddingVertical: 14,
                      marginRight: 11,
                      shadowColor: '#00000040',
                      shadowOpacity: 0.3,
                      shadowOffset: {
                        width: 0,
                        height: 4,
                      },
                      shadowRadius: 4,
                      elevation: 4,
                    }}
                    onPress={() => handleCitySelect('Dubai')}>
                    <Text
                      style={{
                        color: '#022830',
                        fontSize: 14,
                      }}>
                      {'Dubai'}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: 105,
                      alignItems: 'center',
                      backgroundColor:
                        selectedCity === 'Abu Dhabi' ? '#01DBB6' : '#FFFFFF',
                      borderRadius: 10,
                      paddingVertical: 14,
                      marginRight: 11,
                    }}
                    onPress={() => handleCitySelect('Abu Dhabi')}>
                    <Text
                      style={{
                        color: '#022830',
                        fontSize: 14,
                        marginHorizontal: 14,
                      }}>
                      {'Abu Dhabi '}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: 105,
                      alignItems: 'center',
                      backgroundColor:
                        selectedCity === 'Sharjah' ? '#01DBB6' : '#FFFFFF',
                      borderRadius: 10,
                      paddingVertical: 14,
                    }}
                    onPress={() => handleCitySelect('Sharjah')}>
                    <Text
                      style={{
                        color: '#022830',
                        fontSize: 14,
                        marginHorizontal: 17,
                      }}>
                      {'Sharjah'}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 5,
                    marginHorizontal: 32,
                  }}>
                  <Text
                    style={{
                      color: '#022830',
                      fontSize: 15,
                    }}>
                    {'Plate Number'}
                  </Text>
                  <Image
                    source={require('../images/plate.png')}
                    resizeMode={'stretch'}
                    style={{
                      width: 41,
                      height: 22,
                    }}
                  />
                </View>
                <TextInput
                  value={plateNumber}
                  onChangeText={handlePlateNumberChange}
                  placeholder="Enter Plate Number"
                  style={{
                    color: '#979797',
                    fontSize: 12,
                    marginBottom: 13,
                    marginHorizontal: 24,
                    backgroundColor: '#F5F5F5',
                    borderRadius: 5,
                    paddingVertical: 18,
                    paddingHorizontal: 24,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 5,
                    marginHorizontal: 33,
                  }}>
                  <Text
                    style={{
                      color: '#022830',
                      fontSize: 15,
                    }}>
                    {'Cars nickname'}
                  </Text>
                  <Image
                    source={require('../images/carname.png')}
                    resizeMode={'stretch'}
                    style={{
                      width: 35,
                      height: 27,
                    }}
                  />
                </View>
                <TextInput
                  value={nickname}
                  onChangeText={handleNicknameChange}
                  placeholder="Enter Nickname (ie. Nissan)"
                  style={{
                    color: '#979797',
                    fontSize: 12,
                    marginBottom: 42,
                    marginHorizontal: 24,
                    backgroundColor: '#F5F5F5',
                    borderRadius: 5,
                    paddingVertical: 18,
                    paddingHorizontal: 24,
                  }}
                />
                <View
                  style={{
                    backgroundColor: '#F5F5F5',
                    borderRadius: 5,
                    paddingVertical: 37,
                    marginBottom: 44,
                    marginHorizontal: 24,
                  }}>
                  <TouchableOpacity onPress={handleImagePicker}>
                    {vehicleImage ? (
                      <Image
                        source={{uri: vehicleImage}}
                        resizeMode="contain"
                        style={{
                          height: 23,
                          marginTop: 20,
                        }}
                      />
                    ) : (
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../images/add1.png')}
                          resizeMode="contain"
                          style={{
                            height: 36,
                            marginTop: 20,
                          }}
                        />
                      </View>
                    )}

                    <Text
                      style={{
                        color: '#022830',
                        fontSize: 10,
                        marginHorizontal: 128,
                        marginTop:10
                      }}>
                      {'Add Vehicle image'}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                  }}>
                  <ButtonInput title={'Save'} onPress={() => onLogin()} />
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
      <Modal
        isVisible={AddCarVisible}
        style={{
          margin: 0,
          backfaceVisibility: 'visible',
          backgroundColor: 'transparent',
        }}
        onBackdropPress={toggleCarSheet}
        backdropColor="transparent">
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
          }}>
          <ScrollView
            style={{
              flex: 1,
              backgroundColor: '#BFF6ED',
            }}>
            <View
              style={{
                backgroundColor: '#01505F',
              }}>
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  paddingTop: 24,
                  paddingBottom: 53,
                  marginTop: 119,
                }}>
                <View
                  style={{
                    paddingTop: 4,
                    paddingBottom: 41,
                    paddingLeft: 18,
                    marginHorizontal: 6,
                  }}>
                  <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent:'space-between',
                    marginBottom: 26,
                    marginHorizontal: 24,
                  }}>
                  <TouchableOpacity onPress={toggleCarSheet}>
                    <Icons.Ionicons
                      name="arrow-back"
                      style={{color: 'black'}}
                      size={27}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: '#01505F',
                      fontSize: 20,
                    }}>
                    {'Add Vehicle '}
                  </Text>
                  <View></View>
                </View>
                  <View
                    style={{
                      backgroundColor: '#F5F5F5',
                      borderRadius: 5,
                     padding:30,
                      marginBottom: 42,
                    }}>
                    <View style={{display:'flex',alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
                    <View>
                    
                    <Image
                    source={require('../images/carimg.png')}
                  
                    style={{
                      height: 59,
                      width:150,
                  resizeMode:'cover',
                 
                    }}
                    />
                    </View>
                    <View>
                    <Text>4x4 Truck</Text>
                    <Text
                    style={{
                      color: 'black',
                      fontSize: 13,
                    
                    }}>
                    {'D 24247'}
                  </Text>
                    </View>
                        </View>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#99E0D2',
                      borderColor: '#01DBB6',
                      borderRadius: 5,
                     padding:30,
                      marginBottom: 12,
                    }}>
                    <View style={{display:'flex',alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
                    <View>
                    
                    <Image
                    source={require('../images/carimg.png')}
                  
                    style={{
                      height: 59,
                      width:150,
                  resizeMode:'cover',
                 
                    }}
                    />
                    </View>
                    <View>
                    <Text>4x4 Truck</Text>
                    <Text
                    style={{
                      color: 'black',
                      fontSize: 13,
                    
                    }}>
                    {'D 24247'}
                  </Text>
                    </View>
                        </View>
                  </View>
                </View>
                <TouchableOpacity onPress={handleButtonPress}
                  style={{
                    alignItems: 'center',
                    backgroundColor: '#BFF6ED',
                    borderRadius: 30,
                    paddingVertical: 21,
                    marginBottom: 98,
                    marginHorizontal: 79,
                  }}>
                  <Text
                    style={{
                      color: '#00E0B8',
                      fontSize: 16,
                    }}>
                    {'Add More Vehicle'}
                  </Text>
                </TouchableOpacity>
                <View style={{display:'flex',alignItems:'center'}}>
                <ButtonInput title={"Continue"} onPress={handleCarButtonPress}/>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default Marhaba;

const styles = StyleSheet.create({
  imagecon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: windowWidth,
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
    height: windowHeight * 0.9,
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: 'Montserrat',
    color: '#01DBB6',
    // Other text styles
  },
  welcomeText1: {
    fontSize: 13,
    fontFamily: 'Montserrat',
    color: '#01DBB6',
    // Other text styles
  },
  uperdomain: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    borderColor: '#01DBB6',
  },
});
