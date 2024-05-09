import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type FormItemProps = {
  label: string;
  value: string;
  onPress?: () => void;
  isSavePressed?: boolean;
};

const defaultValues = ["Name", "Gender", "BirthDate", "0 y", "0 cm", "Email"];

const FormItem: React.FC<FormItemProps> = ({
  label,
  value,
  onPress,
  isSavePressed,
}) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.value}>
          {value}
        </Text>
      </View>
      {isSavePressed && defaultValues.includes(value) && (
        <Icon name="error" size={20} color="#D32F2F" style={styles.icon} />
      )}
      <Text style={styles.arrow}>{">"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: "#8c8c8c",
  },
  value: {
    fontSize: 16,
    color: "#666666",
    marginTop: 10,
  },
  arrow: {
    fontSize: 18,
    color: "#666666",
  },
  icon: {
    paddingRight: 5,
  },
});

export default FormItem;
