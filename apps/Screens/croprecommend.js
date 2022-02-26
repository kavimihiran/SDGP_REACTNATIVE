import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Header } from "../../components/Header";
import { Recommend } from "../Screens/recommend";

const CropRe = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.menu}>
        <Text numberOfLines={1} style={styles.recommend}>
          Suitable Crops
        </Text>
        <Recommend />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    flex: 0.75,
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  recommend: {
    marginLeft: 120,
    fontSize: 40,
    width: "100%",
    fontFamily: "sans-serif-condensed",
    letterSpacing: 2,
    fontWeight: "bold",
    color: "white",
  },
});

export { CropRe };
