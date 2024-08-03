import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Button = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>DOWNLOAD BROCHURE</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "60%",
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "red",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "700",
  },
});
