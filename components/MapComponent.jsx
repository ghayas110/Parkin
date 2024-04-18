import React from 'react';
import { Button, StyleSheet, View, Image, TouchableOpacity,Text } from 'react-native';
import Icons from './Icons';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const MapComponent = ({onPress,dataSend}) => {
  var navigation=useNavigation()
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 35.7796,
          longitude: -78.6382,
          latitudeDelta: 0.0922,s
          longitudeDelta: 0.0421,
        }}
      >
   
        {dataSend?.map((item,index) =>(
          <View key={index}>

         
          <Marker
          coordinate={{
            latitude: item.event_lat,
            longitude: item.event_lng,
          }}
          title={item.post_title}
       
        />
         </View>
        ))}
        
      </MapView>
  
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
    margin:10
  },
  buttonContainer: {
    position: 'absolute', //Here is the trick
    top: '55%', //Position from top
    right: '5%', //Position from right
  },
});

export default MapComponent;
