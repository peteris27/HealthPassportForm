import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import OpenScreenTemplate from "../components/OpenScreenTemplate";
import AlertComponent from "../components/Alert";
import { usePersonalData } from "../components/PersonalDataProvider";

type RootStackParamList = {
  PersonalDataScreen: undefined;
};

const FirstNameScreen: React.FC = () => {
  const { personalData, updatePersonalData } = usePersonalData();
  const [firstName, setFirstName] = useState<string>(
    personalData.firstName || ""
  );
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [showAlert, setShowAlert] = useState<boolean>(false);

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

  const content = (
    <View>
      <TextInput
        style={styles.input}
        value={firstName}
        placeholder="Name"
        onChangeText={setFirstName}
      />
      {showAlert && (
        <AlertComponent
          message="Name is missing, please write your first name."
          type="error"
        />
      )}
    </View>
  );

  const customButton = <CustomButton title="Save" onPress={handleSave} />;

  return (
    <OpenScreenTemplate
      label="First Name"
      content={content}
      button={customButton}
    />
  );
};

const styles = StyleSheet.create({
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
});

export default FirstNameScreen;
