import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

type OpenScreenTemplateProps = {
  label?: string;
  content: React.ReactNode;
  button: React.ReactNode;
};

const OpenScreenTemplate: React.FC<OpenScreenTemplateProps> = ({
  label,
  content,
  button,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {label && <Text style={styles.label}>{label}</Text>}
        {content}
      </View>
      <View style={styles.buttonContainer}>{button}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    backgroundColor: "#FFFFFF",
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
    paddingTop: 10,
  },
  label: {
    marginTop: 10,
    marginLeft: 30,
    marginBottom: 10,
    fontSize: 16,
    color: "#666666",
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
});

export default OpenScreenTemplate;
