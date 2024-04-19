import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const HorizontalLine = () => {
  return <View style={styles.line}></View>;
};

const styles = StyleSheet.create({
  line: {
    width:windowWidth*0.7,
    borderBottomWidth: 1,
    borderBottomColor: 'whitesmoke', // Change the color as needed

  },
});

export default HorizontalLine;
