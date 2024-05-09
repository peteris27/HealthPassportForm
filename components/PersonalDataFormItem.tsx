import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type FormItemProps = {
  label: string;
  value: string;
  onPress?: () => void;
};

const FormItem: React.FC<FormItemProps> = ({ label, value, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.value}>
          {value}
        </Text>
      </View>
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
});

export default FormItem;
