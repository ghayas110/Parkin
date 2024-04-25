import React from 'react';
import { TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const { width, height } = Dimensions.get('window');

const ButtonInput = ({ onPress, title, icon, style,color }) => {
  const buttonStyles = title === "Login" || title === "SignUp" || title === "Add Car"||title == "Save"||title == "Book with Apple Pay"||title == "Lets Park"||title == "Got it"|| title == "More Payment Options"|| title == "Done"  
    ? [styles.buttons, style] 
    : [styles.button, style];

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={styles.text}>{title} </Text>
      <Icon name={icon} size={20} color="white"/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width * 0.9, // 80% of screen width
    height: height * 0.06, // 10% of screen height
    backgroundColor: '#DC0F14',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginTop:15,
    marginBottom:5
  },
  buttons: {
    width: width * 0.6, // 80% of screen width
    height: height * 0.06, // 10% of screen height
    backgroundColor: '#00E0B8',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginTop:5,
    marginBottom:5
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight:'bold'
  },
});

export default ButtonInput;
