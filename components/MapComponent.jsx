import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  SafeAreaView,
  FlatList,
  TextInput,
  ScrollView,
} from 'react-native';
import Icons from './Icons';
import MapView, {Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import HorizontalLine from './HorizontalLine';
import {Chip} from 'react-native-paper';
import ButtonInput from '../components/ButtonInput';
import DraggableProgressBar from './DraggableProgressBar';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const MapComponent = ({onPress, dataSend}) => {
  var navigation = useNavigation();
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const toggleBottomSheet = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };
  const [bottomSheet2Visible, setBottomSheet2Visible] = useState(false);
  const [bottomSheet4Visible, setBottomSheet4Visible] = useState(false);
  const toggleBottomSheet2 = () => {
    setBottomSheet2Visible(!bottomSheet2Visible);
  };
  const toggleBottomSheet4 = () => {
    setBottomSheet4Visible(!bottomSheet4Visible);
  };
  const handleButtonPress = () => {
    setBottomSheetVisible(true);
  };
  const handleButtonPress2 = () => {
    setBottomSheet2Visible(true);
  };
  
  const [bottomSheet3Visible, setBottomSheet3Visible] = useState(false);
  const toggleBottomSheet3 = () => {
    setBottomSheet3Visible(!bottomSheet3Visible);
  };
  const handleButtonPress3 = () => {
    setBottomSheetVisible(false);
    setBottomSheet2Visible(false);
    setTimeout(() => {
      console.log('Hello, World!');
      setBottomSheet3Visible(true);
    }, 2000);
  };
  const handleButtonPress4 = () => {
    setBottomSheet3Visible(false)
    setBottomSheet4Visible(true);
  };
  const data = [
    {id: 10, name: 'Dubai United Arab Emeries'},
    {id: 13, name: 'Dubai United Arab Emeries'},
    {id: 14, name: 'Dubai United Arab Emeries'},
  ];
  const Item = ({id, name, onPress}) => (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={{
          justifyContent: 'space-between',
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 0,
          borderBottomColor: 'whitesmoke',
          backgroundColor: `${id == 12 ? '#D0D0D0' : ''}`,
          marginBottom: 5,
        }}>
        <Text style={{color: 'grey', width: windowWidth * 0.7}}>{name}</Text>
        <Icons.AntDesign
          style={{color: 'grey'}}
          name="closecircleo"
          size={20}
        />
      </TouchableOpacity>
    </>
  );
  const renderItem = ({item}) => (
    <Item id={item.id} name={item.name} onPress={handleButtonPress3} />
  );
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 35.7796,
          longitude: -78.6382,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {dataSend?.map(item => (
          <Marker
            coordinate={{
              latitude: item.event_lat,
              longitude: item.event_lng,
            }}
            title={item.post_title}
          />
        ))}
      </MapView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={{width: 50}}>
          <Icons.Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainers}>
        <TouchableOpacity style={{width: 50}} onPress={handleButtonPress}>
          <View
            style={{
              flexDirection: 'row',
              width: 290,
              height: 60,
              backgroundColor: 'white',
              borderRadius: 10,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: windowWidth * 0.7,
                padding: 10,
                alignItems: 'center',
              }}>
              <View>
                <Text>DBB Contracting LLC</Text>
                <Text>Dubai - United Arab Emirates</Text>
              </View>
              <View>
                <Image source={require('../images/mapicon.png')} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
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
            alignItems: 'center',
          }}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={{width: 50}} onPress={toggleBottomSheet}>
              <Icons.Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingTop: 55,
              paddingBottom: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: 290,
                height: 60,
                backgroundColor: '#9CFEED',
                borderRadius: 10,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: windowWidth * 0.7,
                  padding: 10,
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icons.AntDesign name="search1" color="#15ECC8" size={20} />
                  <TextInput value="" placeholder="Search Location" />
                </View>
                <TouchableOpacity onPress={handleButtonPress2}>
                  <Image source={require('../images/filter.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <HorizontalLine />
          <View
            style={{
              display: 'flex',
              width: windowWidth * 0.8,
              flexDirection: 'column',
            }}>
            <View>
              <Text>Recent</Text>
            </View>
            <View>
              <FlatList
                style={styles.flatlistBorder}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        </SafeAreaView>
      </Modal>
      <Modal
        isVisible={bottomSheet2Visible}
        style={{
          margin: 0,
          backfaceVisibility: 'visible',
          backgroundColor: 'transparent',
        }}
        onBackdropPress={toggleBottomSheet2}
        backdropColor="transparent">
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 24,
              borderWidth: 1,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}>
            <View>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Filter
                </Text>
                <HorizontalLine />
              </View>
              <TouchableOpacity
                style={{
                  justifyContent: 'space-between',
                  padding: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderBottomWidth: 0,
                  borderBottomColor: 'whitesmoke',
                  marginBottom: 5,
                }}>
                <Text style={{color: 'black', width: windowWidth * 0.7}}>
                  Sort
                </Text>
                <Text style={{color: '#01DBB6', width: windowWidth * 0.7}}>
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Chip
                  mode="outlined"
                  selectedColor="white"
                  style={{
                    marginLeft: 15,
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                  onPress={() => console.log('Pressed')}>
                  Distance
                </Chip>
                <Chip
                  mode="outlined"
                  style={{marginLeft: 15}}
                  onPress={() => console.log('Pressed')}>
                  Slots Available
                </Chip>
                <Chip
                  mode="outlined"
                  style={{marginLeft: 15}}
                  onPress={() => console.log('Pressed')}>
                  Low Price{' '}
                </Chip>
              </View>
            </ScrollView>
            <DraggableProgressBar
              width={300}
              height={20}
              barColor="#D98100"
              backgroundColor="lightgray"
              initialProgress={0.5} // Initial progress value here
            />
          </View>
        </View>
      </Modal>
      <Modal
        isVisible={bottomSheet3Visible}
        style={{
          margin: 0,
          backfaceVisibility: 'visible',
          backgroundColor: 'transparent',
        }}
        onBackdropPress={toggleBottomSheet3}
        backdropColor="transparent">
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 24,
              borderWidth: 1,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}>
            <View>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{alignItems: 'baseline', flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: 35,
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    15.00
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'black',
                    }}>
                    AED
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 13,

                    color: 'grey',
                  }}>
                  Jumierah Village
                </Text>
                <HorizontalLine />
              </View>
              <TouchableOpacity
                style={{
                  justifyContent: 'space-between',
                  padding: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderBottomWidth: 0,
                  borderBottomColor: 'whitesmoke',
                  marginBottom: 5,
                }}>
                <Text style={{color: 'black', width: windowWidth * 0.7}}>
                  6 min
                </Text>
              </TouchableOpacity>
              <ButtonInput
                title={'Book this Place'}
                onPress={handleButtonPress4}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Modal
      isVisible={bottomSheet4Visible}
      style={{
        margin: 0,
        backfaceVisibility: 'visible',
        backgroundColor: 'transparent',
      }}
      onBackdropPress={toggleBottomSheet4}
      backdropColor="transparent">
      <TouchableOpacity style={{width: 50}} onPress={toggleBottomSheet4}>
      <Icons.Ionicons name="arrow-back" size={24} color="black" style={{padding:25}}/>
    </TouchableOpacity>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          alignItems: 'center',
        }}>
        <View style={styles.buttonContainer}>
       
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingTop: 55,
            paddingBottom: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: 290,
              height: 60,
              backgroundColor: '#9CFEED',
              borderRadius: 10,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: windowWidth * 0.7,
                padding: 10,
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icons.AntDesign name="search1" color="#15ECC8" size={20} />
                <TextInput value="" placeholder="Search Location" />
              </View>
              <TouchableOpacity onPress={handleButtonPress2}>
                <Image source={require('../images/filter.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <HorizontalLine />
        <View
          style={{
            display: 'flex',
            width: windowWidth * 0.8,
            flexDirection: 'column',
          }}>
          <View>
            <Text>Recent</Text>
          </View>
          <View>
            <FlatList
              style={styles.flatlistBorder}
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  mapicon: {
    width: 50,
    height: 50,
    margin: 10,
  },
  buttonContainer: {
    position: 'absolute', //Here is the trick
    top: '5%', //Position from top
    left: '5%', //Position from right
  },
  buttonContainers: {
    position: 'absolute', //Here is the trick
    top: '10%', //Position from top
    left: '15%', //Position from right
  },
  searchContainer: {
    position: 'absolute', //Here is the trick
    top: '5%', //Position from top
    left: '5%', //Position from right
  },
});

export default MapComponent;
