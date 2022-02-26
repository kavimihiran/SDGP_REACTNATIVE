import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const SELECTION3 = ["NONE", "City 1", "City 2", "City 3", "City 4", "City 5"];
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const City = (props) => {
  const onPressItem3 = (selection3) => {
    props.ModelVisibility3(false);
    props.setData3(selection3);
  };
  const selection3 = SELECTION3.map((item, index) => {
    return (
      <TouchableOpacity key={index} onPress={() => onPressItem3(item)}>
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    );
  });
  return (
    <TouchableOpacity
      onPress={() => props.ModelVisibility3(false)}
      style={styles.container}
    >
      <View style={[styles.modal, { width: WIDTH - 40, height: HEIGHT / 4 }]}>
        <ScrollView>{selection3}</ScrollView>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    top: 210,
    backgroundColor: "#20b2aa",
    borderRadius: 10,
  },
  option: {
    alignItems: "flex-start",
  },
  text: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});
export { City };
