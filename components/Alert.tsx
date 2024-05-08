import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type AlertComponentProps = {
  message: string;
  type?: "error" | "success";
};

const AlertComponent: React.FC<AlertComponentProps> = ({
  message,
  type = "error",
}) => {
  const containerStyle =
    type === "error" ? styles.errorContainer : styles.successContainer;
  const textStyle = type === "error" ? styles.errorText : styles.successText;

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{message}</Text>
      <Icon
        name={type === "error" ? "error" : "check-circle"}
        size={20}
        color={type === "error" ? "#D32F2F" : "#4CAF50"}
        style={styles.iconStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    backgroundColor: "#f8d7da",
    borderColor: "#f5c6cb",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  successContainer: {
    backgroundColor: "#d4edda",
    borderColor: "#c3e6cb",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  errorText: {
    color: "#721c24",
    fontSize: 16,
    flex: 1,
    paddingRight: 10,
  },
  successText: {
    color: "#155724",
    fontSize: 16,
    flex: 1,
    paddingRight: 10,
  },
  iconStyle: {
    paddingRight: 5,
  },
});

export default AlertComponent;
