import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import FormItem from "../components/PersonalDataFormItem";
import CustomButton from "../components/CustomButton";
import { usePersonalData } from "../components/PersonalDataProvider";
import AlertComponent from "../components/Alert";

type RootStackParamList = {
  PersonalDataScreen: undefined;
  FirstNameScreen: undefined;
  GenderScreen: undefined;
  EmailScreen: undefined;
  BirthDateScreen: undefined;
  HeightScreen: undefined;
};

type PersonalDataScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: PersonalDataScreenNavigationProp;
};

const PersonalDataScreen: React.FC<Props> = ({ navigation }) => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);
  const [isSavePressed, setIsSavePressed] = useState<boolean>(false);

  const { personalData, updatePersonalData } = usePersonalData();

  const firstName = personalData.firstName || "Name";
  const gender = personalData?.gender || "Gender";
  const birthDate = personalData?.birthDate || "BirthDate";
  const age = personalData?.age || "0 y";
  const height = personalData?.height || "0 cm";
  const email = personalData?.email || "Email";

  const handleSave = () => {
    if (
      Object.keys(personalData).length == 0 ||
      !personalData.firstName ||
      !personalData.gender ||
      !personalData.birthDate ||
      !personalData.age ||
      !personalData.height ||
      !personalData.email
    ) {
      setShowAlert(true);
      setShowSuccessAlert(false);
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      setShowAlert(false);
      setShowSuccessAlert(true);
      setTimeout(() => setShowSuccessAlert(false), 3000);
    }
    setIsSavePressed(true);
    setTimeout(() => setIsSavePressed(false), 3000);
  };

  const button = <CustomButton title="Save" onPress={handleSave} />;

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <FormItem
          label="First name"
          value={firstName}
          onPress={() => navigation.navigate("FirstNameScreen")}
          isSavePressed={isSavePressed}
        />
        <FormItem
          label="Gender"
          value={gender}
          onPress={() => navigation.navigate("GenderScreen")}
          isSavePressed={isSavePressed}
        />
        <FormItem
          label="Birth Date"
          value={birthDate}
          onPress={() => navigation.navigate("BirthDateScreen")}
          isSavePressed={isSavePressed}
        />
        <FormItem label="Age" value={age} />
        <FormItem
          label="Height"
          value={height}
          onPress={() => navigation.navigate("HeightScreen")}
          isSavePressed={isSavePressed}
        />
        <FormItem
          label="Email"
          value={email}
          onPress={() => navigation.navigate("EmailScreen")}
          isSavePressed={isSavePressed}
        />
      </View>
      {showAlert && (
        <AlertComponent message="Please fill all data." type="error" />
      )}
      {showSuccessAlert && (
        <AlertComponent message="All data saved successfully." type="success" />
      )}
      <View style={styles.button}>{button}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: "#FFFFFF",
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
  },
  button: {
    alignItems: "center",
    margin: 45,
  },
});

export default PersonalDataScreen;
