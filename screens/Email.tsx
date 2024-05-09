import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import CustomButton from "../components/CustomButton";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import OpenScreenTemplate from "../components/OpenScreenTemplate";
import AlertComponent from "../components/Alert";
import { usePersonalData } from "../components/PersonalDataProvider";
import Icon from "react-native-vector-icons/Ionicons";

type RootStackParamList = {
  PersonalDataScreen: undefined;
};

const EmailScreen: React.FC = () => {
  const { personalData, updatePersonalData } = usePersonalData();
  const [email, setEmail] = useState<string>(personalData.email || "");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSave = () => {
    if (isValidEmail(email)) {
      updatePersonalData({ email });
      navigation.navigate("PersonalDataScreen");
      setShowAlert(false);
    } else {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const handleClear = () => {
    setEmail("");
  };

  const content = (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, isFocused ? styles.focusedInput : null]}
        value={email}
        placeholder="Email"
        onChangeText={setEmail}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {email !== "" && (
        <TouchableOpacity style={styles.clearIcon} onPress={handleClear}>
          <Icon name="close-circle" size={20} color="gray" />
        </TouchableOpacity>
      )}
      {showAlert && (
        <AlertComponent
          message="Invalid email, please check again."
          type="error"
        />
      )}
    </View>
  );

  const customButton = <CustomButton title="Save" onPress={handleSave} />;

  return (
    <OpenScreenTemplate label="Email" content={content} button={customButton} />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
  },
  input: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  focusedInput: {
    borderColor: "#0000FF",
  },
  clearIcon: {
    position: "absolute",
    top: 15,
    right: 15,
    marginRight: 30,
  },
});

export default EmailScreen;
