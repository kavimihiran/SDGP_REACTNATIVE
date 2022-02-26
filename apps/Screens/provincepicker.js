import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const SELECTION1 = [
  "NONE",
  "Province 1",
  "Province 2",
  "Province 3",
  "Province 4",
  "Province 5",
];
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const Province = (props) => {
  const onPressItem1 = (selection1) => {
    props.ModelVisibility1(false);
    props.setData1(selection1);
  };
  const selection1 = SELECTION1.map((item, index) => {
    return (
      <TouchableOpacity key={index} onPress={() => onPressItem1(item)}>
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    );
  });
  return (
    <TouchableOpacity
      onPress={() => props.ModelVisibility1(false)}
      style={styles.container}
    >
      <View style={[styles.modal, { width: WIDTH - 40, height: HEIGHT / 4 }]}>
        <ScrollView>{selection1}</ScrollView>
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
export { Province };
