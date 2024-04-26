import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import DetailScreen from '../pages/DetailScreen';
import Icons from '../components/Icons';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Location from '../pages/Location';
import Article from '../pages/Article';
import Feed from '../pages/Feed';
const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: 'absolute',
      bottom: 30,
      right: 20,
      left: 20,
      elevation: 0,
      borderRadius: 30,
      backgroundColor: 'black',
      height: 60,
    },
  };
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={
                  !focused
                    ? require('../images/home.png')
                    : require('../images/home1.png')
                }
                style={{width: 25, height: 20, objectFit: 'contain'}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={
                  !focused
                    ? require('../images/location.png')
                    : require('../images/location1.png')
                }
                style={{width: 25, height: 20, objectFit: 'contain'}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#01DBB6',
                width: Platform.OS == 'ios' ? 50 : 80,
                height: Platform.OS == 'ios' ? 50 : 80,

                borderRadius: Platform.OS == 'ios' ? 25 : 50,
              }}>
              <Image
                source={
                  !focused
                    ? require('../images/add.png')
                    : require('../images/add.png')
                }
                style={{width: 25, height: 20, objectFit: 'contain'}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Article"
        component={Article}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={
                !focused
                  ? require('../images/card.png')
                  : require('../images/card1.png')
              }
              style={{width: 25, height: 20, objectFit: 'contain'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={
                !focused
                  ? require('../images/profile.png')
                  : require('../images/profile1.png')
              }
              style={{width: 25, height: 20, objectFit: 'contain'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
