import React, { useState, useRef } from "react";
import { View, Button } from "react-native";
import { BottomSheet, Modal, Text, IconButton } from "react-native-paper";
import PhoneInput from "react-native-phone-number-input";

const PhoneNoInput = () => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const phoneInput = useRef(null);

  // Function to handle increasing bottom sheet height and opening modal
  const handleButtonPress = () => {

  };

  return (
    <View style={{ paddingTop: 20 }}>
      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="AE"
        layout="first"
        onChangeText={(text) => {
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        containerStyle={{ marginTop: 20, borderRadius: 10}}
        textContainerStyle={{ borderRadius: 10 }}
      />

      {/* Bottom Sheet */}
  
  
    </View>
  );
};

export default PhoneNoInput;
