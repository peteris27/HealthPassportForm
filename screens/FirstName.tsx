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

const FirstNameScreen: React.FC = () => {
  const { personalData, updatePersonalData } = usePersonalData();
  const [firstName, setFirstName] = useState<string>(
    personalData.firstName || ""
  );
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSave = () => {
    if (firstName) {
      updatePersonalData({ firstName });
      navigation.navigate("PersonalDataScreen");
      setShowAlert(false);
    } else {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const handleClear = () => {
    setFirstName("");
  };

  const content = (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, isFocused ? styles.focusedInput : null]}
        value={firstName}
        placeholder="First name"
        onChangeText={setFirstName}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {firstName !== "" && (
        <TouchableOpacity style={styles.clearIcon} onPress={handleClear}>
          <Icon name="close-circle" size={20} color="gray" />
        </TouchableOpacity>
      )}
      {showAlert && (
        <AlertComponent
          message="First name is missing, please type your name."
          type="error"
        />
      )}
    </View>
  );

  const customButton = <CustomButton title="Save" onPress={handleSave} />;

  return (
    <OpenScreenTemplate
      label="First name"
      content={content}
      button={customButton}
    />
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

export default FirstNameScreen;
