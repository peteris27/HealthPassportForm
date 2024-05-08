import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import ModalScreenTemplate from "../components/ModalScreenTemplate";
import { usePersonalData } from "../components/PersonalDataProvider";

type RootStackParamList = {
  PersonalDataScreen: undefined;
};

const GenderScreen: React.FC = () => {
  const { personalData, updatePersonalData } = usePersonalData();
  const [selectedGender, setSelectedGender] = useState<string | null>(
    personalData.gender || null
  );
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSelectGender = (gender: string) => {
    setSelectedGender(gender);
    updatePersonalData({ gender });
    navigation.navigate("PersonalDataScreen");
  };

  const label = "Select your gender given on the birth";
  const content = (
    <View>
      <TouchableOpacity
        style={[
          selectedGender === "Male" ? styles.buttonSelected : styles.button,
        ]}
        onPress={() => handleSelectGender("Male")}
      >
        <Text style={styles.buttonText}>Male</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          selectedGender === "Female" ? styles.buttonSelected : styles.button,
        ]}
        onPress={() => handleSelectGender("Female")}
      >
        <Text style={styles.buttonText}>Female</Text>
      </TouchableOpacity>
    </View>
  );

  return <ModalScreenTemplate label={label} content={content} />;
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
    color: "#3385ff",
    fontWeight: "bold",
  },
  button: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
    height: 55,
    width: 330,
  },
  buttonSelected: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e6eeff",
    marginBottom: 10,
    borderRadius: 10,
    height: 55,
    width: 330,
  },
});

export default GenderScreen;
