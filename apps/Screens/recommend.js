import React, { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";

const Recommend = () => {
  const SELECTION = ["soilType1", "soilType2"];
  const SELECTION2 = ["Most Suitable Crop", "Compost"];
  const SELECTION1 = [
    { src: require("../assets/logo.jpg") },
    { src: require("../assets/logo1.jpg") },
  ];
  const List = SELECTION.map((item) => {
    return <Text style={styles.text}>{item}</Text>;
  });
  const List1 = SELECTION2.map((item) => {
    return <Text style={styles.text1}>{item}</Text>;
  });

  const Image1 = () => {
    var counter = -1;
    var counter1 = -1;
    return SELECTION1.map((items) => {
      const { src } = items;
      counter++;
      counter1++;
      return (
        <View style={styles.box}>
          <View style={styles.inner}>
            {List1[counter1]}
            <Image
              style={styles.first}
              resizeMode="contain"
              source={src}
            ></Image>
            {List[counter]}
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
    width: "140%",
    height: "90%",
    padding: 5,
    flexDirection: "column",
    flexWrap: "wrap",
    marginLeft: 425,
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
    top: 4,
  },
  text1: {
    color: "black",
    fontFamily: "sans-serif-condensed",
    fontSize: 23,
    fontWeight: "bold",
    bottom: 8,
  },
  image: {
    borderRadius: 350,
    width: "35%",
  },
  first: {
    width: "100%",
    height: "60%",
    top: 5,
    borderRadius: 40,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export { Recommend };
