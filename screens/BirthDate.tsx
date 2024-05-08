import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import ModalScreenTemplate from "../components/ModalScreenTemplate";
import Moment from "moment";
import { usePersonalData } from "../components/PersonalDataProvider";
import DatePicker from "react-native-date-picker";
import { parse } from "date-fns";

type RootStackParamList = {
  PersonalDataScreen: undefined;
};

const BirthDateScreen: React.FC = () => {
  const { personalData, updatePersonalData } = usePersonalData();
  let personalDataBirthDate = new Date();
  if (personalData.birthDate) {
    personalDataBirthDate = parse(
      personalData.birthDate,
      "MMMM do yyyy",
      new Date()
    );
  }

  const [selectedBirthDate, setSelectedDate] = useState<Date>(
    personalDataBirthDate
  );

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const calculateAge = (birthDate: any) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const handleConfirm = () => {
    if (selectedBirthDate) {
      const age = calculateAge(selectedBirthDate);
      updatePersonalData({
        birthDate: Moment(selectedBirthDate).format("MMMM Do YYYY"),
        age: `${age} y`,
      });
      navigation.navigate("PersonalDataScreen");
    }
  };

  useEffect(() => {
    if (personalData.birthDate) {
      setSelectedDate(
        parse(personalData.birthDate, "MMMM do yyyy", new Date())
      );
    }
  }, [personalData.birthDate]);

  const todayDate = new Date();
  const hundredYearsAgoDate = new Date(
    new Date().setFullYear(new Date().getFullYear() - 100)
  );

  const label = "Select your birth date";

  const content = (
    <DatePicker
      mode={"date"}
      date={selectedBirthDate}
      onDateChange={onDateChange}
      maximumDate={todayDate}
      minimumDate={hundredYearsAgoDate}
      dividerColor="#FFFFFF"
      style={styles.pickerContainer}
      theme={"auto"}
    />
  );

  const button = <Text style={styles.buttonText}>Save</Text>;

  return (
    <ModalScreenTemplate
      label={label}
      content={content}
      button={button}
      onPressButton1={handleConfirm}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  pickerContainer: {
    marginBottom: 20,
    color: "red",
  },
  buttonText: {
    fontSize: 16,
    color: "#3385ff",
    fontWeight: "bold",
  },
});

export default BirthDateScreen;
