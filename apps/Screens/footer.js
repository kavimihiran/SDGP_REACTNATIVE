import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={{ fontSize: 20 }}></Text>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    backgroundColor: "gold",
    height: 20,
  },
});
export { Footer };
