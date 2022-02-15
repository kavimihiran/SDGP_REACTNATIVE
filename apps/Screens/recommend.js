import React, { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";

const Recommend = () => {
  const SELECTION = ["soilType1", "soilType2", "soilType3", "soilType4"];
  const SELECTION1 = [
    { src: require("../assets/logo.jpg") },
    { src: require("../assets/logo1.jpg") },
  ];
  const List = SELECTION.map((item) => {
    return <Text style={styles.text}>{item}</Text>;
  });

  const Image1 = () => {
    var counter = -1;
    return SELECTION1.map((items) => {
      const { src } = items;
      counter++;
      return (
        <View style={styles.box}>
          <View style={styles.inner}>
            {List[counter]}
            <Image
              style={styles.first}
              resizeMode="contain"
              source={src}
            ></Image>
          </View>
        </View>
      );
    });
  };
  return (
    <View style={styles.container}>
      <Image1 />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginRight: 160,
    bottom: 250,
    width: "80%",
    height: "50%",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    marginRight: 15,
  },
  box: {
    width: "50%",
    height: "50%",
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: "#20b2aa",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 23,
    bottom: 15,
  },
  image: {
    borderRadius: 350,
    width: "35%",
  },
  first: {
    width: "90%",
    height: "60%",
    borderRadius: 40,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export { Recommend };
