import React, { useState, useRef } from "react";
import { View } from "react-native";

import PhoneInput from "react-native-phone-number-input";


const PhoneNoInput = () => {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
 
  return (
    <View style={{paddingTop:20}}>

    <PhoneInput
      ref={phoneInput}
      defaultValue={value}
      defaultCode="AE"
      onChangeFormattedText={(text) => {
        setValue(text);
      }}
      autoFocus
      containerStyle={{
        height:50,
        
      }}
      />
      </View>
  );
};

export default PhoneNoInput;
