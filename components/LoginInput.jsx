import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Dimensions,
  } from 'react-native';
  import React, {useState} from 'react';
  
  import Icon from 'react-native-vector-icons/AntDesign';
  import Icons from './Icons';
  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const LoginInput= ({
    placeholder,
    placeholderColor,
    setValues,
    icon,
    pass,
    currentvalue,
    edit,
    title,
    keyboardType,
  }) => {
    return (
      <View style={{marginTop: 5}}>
        <Text style={{color: "white",paddingVertical:10}}>{title}</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={placeholderColor}
            onChangeText={setValues}
            value={currentvalue}
            keyboardType={keyboardType}
            secureTextEntry={pass}
            editable={edit}
            
          />
          <Icon name={icon} size={20} color="grey" />
        </View>
      </View>
    );
  };
  
  export default LoginInput;
  
  const styles = StyleSheet.create({
    searchContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
  
      borderBottomColor: 'grey', 
      paddingHorizontal: 15,
      borderRadius:10,
      backgroundColor:'white',
    
    },
    input: {
      flex: 1,
      marginLeft: 0,
      color: 'black',
    },
  });
  