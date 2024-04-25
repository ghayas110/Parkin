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
import DatePicker from 'react-native-date-picker';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const MapComponent = ({onPress, dataSend}) => {
  var navigation = useNavigation();
  const [startTime, setStartTime] = useState(new Date());
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const toggleBottomSheet = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };
  const [bottomSheet2Visible, setBottomSheet2Visible] = useState(false);
  const [bottomSheet4Visible, setBottomSheet4Visible] = useState(false);
  const [bottomSheet5Visible, setBottomSheet5Visible] = useState(false);

  const toggleBottomSheet2 = () => {
    setBottomSheet2Visible(!bottomSheet2Visible);
  };
  const toggleBottomSheet4 = () => {
    setBottomSheet4Visible(!bottomSheet4Visible);
  };
  const toggleBottomSheet5 = () => {
    setBottomSheet5Visible(!bottomSheet5Visible);
  };
  const handleButtonPress = () => {
    setBottomSheetVisible(true);
  };
  const handleButtonPress2 = () => {
    setBottomSheet2Visible(true);
  };
  const handleButtonPress5 = () => {
    setBottomSheet4Visible(false);
    setBottomSheet5Visible(true)
  };
  const handleButtonPress6 = () => {
    setBottomSheet5Visible(false);
  navigation.navigate('CarDetail')
  };
  const [Location, setLocation] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('A');
  const [bottomSheet3Visible, setBottomSheet3Visible] = useState(false);
  const toggleBottomSheet3 = () => {
    setBottomSheet3Visible(!bottomSheet3Visible);
  };
  const datad = Array.from({length: 26}, (_, i) =>
    String.fromCharCode('A'.charCodeAt(0) + i),
  );
  const [startHour, setStartHour] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [endHour, setEndHour] = useState(new Date());
  const [open1, setOpen1] = useState(false);

  const handleLetterSelection = letter => {
    setSelectedLetter(letter);
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
    setBottomSheet3Visible(false);
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
          <Icons.Ionicons
            name="arrow-back"
            size={24}
            color="black"
            style={{padding: 25}}
          />
        </TouchableOpacity>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderWidth: 1,
          }}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingTop: 25,
              paddingBottom: 20,
            }}>
            <TouchableOpacity
              style={{
                justifyContent: 'space-between',
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 0,
                borderBottomColor: 'whitesmoke',
              }}>
              <Text style={{color: 'black', width: windowWidth * 0.8}}>
                Parking Zone
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                width: 320,
                height: 60,
                backgroundColor: 'whitesmoke',
                borderRadius: 10,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  width: windowWidth * 0.8,

                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TextInput value="" placeholder="000" />
                  <TextInput
                    value={selectedLetter}
                    onChangeText={text => setSelectedLetter(text)}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={{display: 'flex', height: 25}}>
            <FlatList
              horizontal
              data={datad}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => handleLetterSelection(item)}>
                  <Text style={styles.letter}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <View
            style={{
              width: '85%',
              backgroundColor: '#F5F5F5',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 20,
              marginTop: 20,
            }}>
            <Text>Booking Info</Text>
            <View>
              <View
                style={{
                  justifyContent: 'space-between',

                  flexDirection: 'row',
                  width: '100%',
                  padding: 10,
                }}>
                <View
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexdirection: 'column',
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: 120,
                    }}>
                    <Text style={{color: 'black'}}>Start Hour</Text>

                    <Image
                      source={require('../images/timer.png')}
                      style={{resizeMode: 'contain', width: 20}}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => setOpen(true)}
                    style={{
                      flexDirection: 'row',
                      width: 130,
                      height: 40,
                      backgroundColor: '#ffff',
                      borderRadius: 10,
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: windowWidth * 0.3,
                        padding: 10,
                        alignItems: 'center',
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TextInput
                          value={startHour.toLocaleTimeString()}
                          editable={false}
                          onChangeText={text => setStartHour(text)}
                          style={{height: 40}}
                        />
                      </View>
                      <TouchableOpacity onPress={handleButtonPress2}>
                        <Image
                          source={require('../images/timer1.png')}
                          style={{resizeMode: 'contain', width: 20}}
                        />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                  <View></View>
                </View>
                <View
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: 120,
                    }}>
                    <Text style={{color: 'black'}}>End Hour</Text>

                    <Image
                      source={require('../images/timer.png')}
                      style={{resizeMode: 'contain', width: 20}}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: 130,
                      height: 40,
                      backgroundColor: '#ffff',
                      borderRadius: 10,
                    }}>
                    <TouchableOpacity
                      onPress={() => setOpen(true)}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: windowWidth * 0.3,
                        padding: 20,
                        alignItems: 'center',
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TextInput
                          value={endHour.toLocaleTimeString()}
                          editable={false}
                          onChangeText={text => setEndHour(text)}
                          style={{height: 40}}
                        />
                      </View>
                      <TouchableOpacity onPress={handleButtonPress2}>
                        <Image
                          source={require('../images/timer1.png')}
                          style={{resizeMode: 'contain', width: 20}}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>
                  <View></View>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'space-between',
              paddingTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 0,
              borderBottomColor: 'whitesmoke',
            }}>
            <Text style={{color: 'black', width: windowWidth * 0.85}}>
              Payment
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: '85%',
              backgroundColor: '#F5F5F5',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 10,
              marginTop: 20,
            }}>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: windowWidth * 0.7,
                padding: 10,
              }}>
              <Text style={{color: 'black'}}>Subtotal</Text>
              <Text style={{color: 'grey'}}>15.00 AED</Text>
            </View>
            <HorizontalLine />
            <TouchableOpacity
              style={{
                width: windowWidth * 0.7,
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                padding: 10,
                borderBottomWidth: 0,
                borderBottomColor: 'whitesmoke',
              }}>
              <Text style={{color: 'black', width: windowWidth * 0.85}}>
                Tap to enter coupon code
              </Text>
            </TouchableOpacity>
            <HorizontalLine />
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: windowWidth * 0.7,
                padding: 10,
              }}>
              <Text style={{color: 'black'}}>Total</Text>
              <Text style={{color: 'grey'}}>15.00 AED</Text>
            </View>
            <HorizontalLine />
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: windowWidth * 0.7,
                padding: 10,
              }}>
              <Text style={{color: 'black'}}>Pay</Text>
              <Text style={{color: 'black'}}>Apple Pay</Text>
              <Text style={{color: 'grey'}}>{'>'}</Text>
            </View>
          </View>
          <ButtonInput
            style={{backgroundColor: 'black'}}
            title="Book with Apple Pay"
          />
          <ButtonInput
          onPress={handleButtonPress5}
            style={{backgroundColor: '#DC0F14'}}
            title="More Payment Options"
          />
        </SafeAreaView>
      </Modal>
      <Modal
        isVisible={bottomSheet5Visible}
        style={{
          margin: 0,
          backfaceVisibility: 'visible',
          backgroundColor: 'transparent',
        }}
        onBackdropPress={toggleBottomSheet5}
        backdropColor="transparent">
        <TouchableOpacity style={{width: 50}} onPress={toggleBottomSheet5}>
          <Icons.Ionicons
            name="arrow-back"
            size={24}
            color="black"
            style={{padding: 25}}
          />
        </TouchableOpacity>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderWidth: 1,
          }}>
       

          <View
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: windowWidth * 0.9,
            padding: 20,
          }}>
          <View style={{  flexDirection: 'row',
          justifyContent: 'space-between',width:windowWidth*0.6}}>
          <View>
          <Image source={require('../images/park1.png')}/>
          <Text style={{color: 'black'}}>6 min</Text>
          </View>
          <View style={{flexDirection:'column'}}>
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
          <Text>Jumerah Village</Text>
          </View>
          </View>
          <View>
          <Icons.AntDesign
          style={{color: 'grey'}}
          name="closecircleo"
          size={20}
          />
          </View>
          </View>
          <ButtonInput
          onPress={handleButtonPress6}
            style={{backgroundColor: '#DC0F14'}}
            title="Book this space"
          />
          <TouchableOpacity
          style={{
           
            padding: 10,
            flexDirection: 'column',
            alignItems: 'center',
            borderBottomWidth: 0,
            borderBottomColor: 'whitesmoke',
          }}>
          <Text style={{color: 'black', width: windowWidth * 0.8}}>
            About the Garage
          </Text>
          <Text style={{color: 'black', width: windowWidth * 0.8}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
        </Text>
        <View style={{padding:15}}>
        <Image source={require('../images/park2.png')} style={{width:windowWidth*0.8}}/>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        style={{
         
    
          flexDirection: 'column',
          alignItems: 'center',
          borderBottomWidth: 0,
          borderBottomColor: 'whitesmoke',
        }}>
        <Text style={{color: 'black', width: windowWidth * 0.8}}>
          Amnesties
        </Text>
  
   
      </TouchableOpacity>
        <View
        style={{
          width: '85%',
          backgroundColor: '#F5F5F5',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          marginTop: 10,
        }}>
        <TouchableOpacity
        style={{
        
          flexDirection: 'column',
          alignItems: 'center',
          borderBottomWidth: 0,
          borderBottomColor: 'whitesmoke',
        }}>
        <Text style={{color: 'black', width: windowWidth * 0.8}}>
          Attended
        </Text>
  
   
      </TouchableOpacity>
      
        </View>
        <View
        style={{
          width: '85%',
          backgroundColor: '#F5F5F5',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          marginTop: 10,
        }}>
        <TouchableOpacity
        style={{
        
          flexDirection: 'column',
          alignItems: 'center',
          borderBottomWidth: 0,
          borderBottomColor: 'whitesmoke',
        }}>
        <Text style={{color: 'black', width: windowWidth * 0.8}}>
       Covered
        </Text>
  
   
      </TouchableOpacity>
      
        </View>
        <View>
        </View>
        </SafeAreaView>
      </Modal>
      <DatePicker
        modal
        mode="time"
        open={open}
        date={startHour}
        onConfirm={date => {
          setOpen(false);
          setStartHour(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
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
  letter: {
    fontSize: 20,
    marginHorizontal: 30,
  },
});

export default MapComponent;
