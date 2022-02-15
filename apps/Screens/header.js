import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 20 }}></Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "red",
    height: "10%",
    width: "100%",
  },
});
export { Header };
