import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ModalScreenTemplate from "../components/ModalScreenTemplate";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RulerPicker } from "react-native-ruler-picker";
import { usePersonalData } from "../components/PersonalDataProvider";

type RootStackParamList = {
  PersonalDataScreen: undefined;
};

const HeightScreen: React.FC = () => {
  const { personalData, updatePersonalData } = usePersonalData();

  let personalDataHeight = 0;
  if (personalData.height) {
    personalDataHeight = Number(personalData.height.replace(" cm", ""));
  }

  const [height, setHeight] = useState<number>(personalDataHeight);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSave = () => {
    updatePersonalData({ height: `${height} cm` });
    navigation.navigate("PersonalDataScreen");
  };

  const label = "How tall are You?";

  const content = (
    <View>
      <RulerPicker
        min={0}
        max={252}
        step={1}
        fractionDigits={0}
        initialValue={personalDataHeight}
        onValueChange={(value) => setHeight(parseInt(value))}
        onValueChangeEnd={(value) => setHeight(parseInt(value))}
        unit="cm"
      />
    </View>
  );

  const button = <Text style={styles.buttonText}>Save</Text>;

  return (
    <ModalScreenTemplate
      label={label}
      content={content}
      button={button}
      onPressButton1={handleSave}
    />
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
    color: "#3385ff",
    fontWeight: "bold",
  },
});

export default HeightScreen;
