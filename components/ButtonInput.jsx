import React from 'react';
import { TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const { width, height } = Dimensions.get('window');

const ButtonInput = ({onPress,title,icon}) => {
  return (
    <TouchableOpacity style={title === "Login" || title === "Create Full Time Job" || title === "Take Job" || title === "Start Chat " ? styles.buttons : styles.button} onPress={onPress}>
      <Text style={styles.text}>{title} </Text>
      <Icon name={icon} size={20} color="white"/>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  button: {
    width: width * 0.5, // 80% of screen width
    height: height * 0.06, // 10% of screen height
    backgroundColor: '#01505F',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginTop:15,
    marginBottom:5
  },
  buttons: {
    width: width * 0.5, // 80% of screen width
    height: height * 0.06, // 10% of screen height
    backgroundColor: '#00E0B8',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginTop:10,
    marginBottom:10
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default ButtonInput
