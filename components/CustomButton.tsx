import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type CustomButtonProps = {
  onPress?: () => void;
  title: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF",
    height: 55,
    width: 330,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CustomButton;
