
import React, { useState } from "react";
import {StyleSheet, SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, Dimensions, TextInput, } from "react-native";
import Icons from "../components/Icons";
import HorizontalLine from "../components/HorizontalLine";
import YesNoSelector from "../components/Selector";
import DatePicker from 'react-native-modern-datepicker';
const Calender = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [selectedTraing, setSelectedTraining] = useState('Standard');
    const training = ['Standard', 'Premium'];
    const handleTrainingSelected = training => {
        setSelectedTraining(training);
      };
      const [selectedDate, setSelectedDate] = useState('');
const FullCalender = () => {
    return (
      <DatePicker
      
      onSelectedChange={date => setSelectedDate(date)}
        mode="calendar"
      
        style={{ borderRadius: 10,height:300 }}
      />
    );
  };
  return (
    <SafeAreaView >
			
			<ScrollView  
				style = {{
				
					backgroundColor: "#01505F",
               
				}}>
				<View style={{display:'flex',alignItems:'center',justifyContent:'center',height:windowHeight*0.25,	flex: 1,}}>
               
			
                    <View
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: windowWidth,
                      padding:10
                     
                    }}>
                    <TouchableOpacity >
                    <Icons.Ionicons name="arrow-back" size={24} color="white" />

                  </TouchableOpacity>
                  <View>
                  <Text style={{color: '#01DBB6'}}>Dubai Parking</Text>
                  </View>
                  <View>
                  <Text>.</Text>
                  </View>
                  </View>
                  <HorizontalLine/>
                  <TouchableOpacity
                  style={{
                   
                    paddingTop: 10,
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderBottomWidth: 0,
                    borderBottomColor: 'whitesmoke',
                  }}>
                  <Text style={{color: '#01DBB6', width: windowWidth * 0.9}}>
                    Parking Zone
                  </Text>
                
                </TouchableOpacity>
                  <View style={{alignItems:'center',justifyContent:'center',padding:10,marginBottom:20}}>
                  <YesNoSelector
                  specialties={training}
                  onSpecialtySelected={handleTrainingSelected}
                  defaultValue={selectedTraing}
                  />
                  </View>
              </View>
		
				<View 
					style = {{
                        flex:2,
						
					}}
                    >
				<View style = {{
                  
                    backgroundColor: "#FFFFFF",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}>
                <TouchableOpacity
                  style={{
                   
                    paddingTop: 10,
                    flexDirection: 'column',
                    alignItems: 'center',
                    height:windowHeight*0.5,
                    borderBottomWidth: 0,
                    borderBottomColor: 'whitesmoke',
                  }}>
                  <Text style={{color: '#01505F', width: windowWidth * 0.9}}>
                  Select Date
                  </Text>
                <FullCalender/>
                </TouchableOpacity>
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
                        backgroundColor:'whitesmoke',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TextInput
                        placeholder="000"
                          editable={false}
                    
                          style={{height: 40}}
                        />
                      </View>
                      <TouchableOpacity >
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
                      backgroundColor:'whitesmoke',
                      borderRadius: 10,
                    }}>
                    <TouchableOpacity
                  
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
                         placeholder="000"
                          editable={false}
                        
                          style={{height: 40}}
                        />
                      </View>
                      <TouchableOpacity >
                        <Image
                          source={require('../images/timer1.png')}
                          style={{resizeMode: 'contain', width: 20}}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>
                
                </View>
               
              </View>
              <View style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:10}}>
              <Text>hj</Text>
              </View>
                </View>
              
				</View>
                
			</ScrollView>
		</SafeAreaView>
  )
}

export default Calender

const styles = StyleSheet.create({})