import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

type ModalScreenTemplateProps = {
  label?: string;
  content: React.ReactNode;
  button?: React.ReactNode;
  button2?: React.ReactNode;
  onPressButton1?: () => void;
  onPressButton2?: () => void;
};

const ModalScreenTemplate: React.FC<ModalScreenTemplateProps> = ({
  label,
  content,
  button,
  button2,
  onPressButton1,
  onPressButton2,
}) => {
  const Divider = () => <View style={styles.divider} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Divider />
        <View style={styles.card}>
          <Text style={styles.title}>{label}</Text>
          {content}
          {button && (
            <TouchableOpacity style={styles.button} onPress={onPressButton1}>
              {button}
            </TouchableOpacity>
          )}
          {button2 && (
            <TouchableOpacity style={styles.button} onPress={onPressButton2}>
              {button2}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#4d4d4d",
  },
  divider: {
    height: 5,
    backgroundColor: "#cccccc",
    width: "30%",
    alignSelf: "center",
    marginVertical: 20,
  },
  main: {
    backgroundColor: "#f2f2f2",
    width: "100%",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    margin: 10,
  },
  title: {
    fontSize: 21,
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
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

export default ModalScreenTemplate;
