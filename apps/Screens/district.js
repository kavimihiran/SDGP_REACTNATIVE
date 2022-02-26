import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const SELECTION2 = [
  "NONE",
  "DISTRICT 1",
  "DISTRICT 2",
  "DISTRICT 3",
  "DISTRICT 4",
  "DISTRICT 5",
];
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const District = (props) => {
  const onPressItem2 = (selection2) => {
    props.ModelVisibility2(false);
    props.setData2(selection2);
  };
  const selection2 = SELECTION2.map((item, index) => {
    return (
      <TouchableOpacity key={index} onPress={() => onPressItem2(item)}>
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    );
  });
  return (
    <TouchableOpacity
      onPress={() => props.ModelVisibility2(false)}
      style={styles.container}
    >
      <View style={[styles.modal, { width: WIDTH - 40, height: HEIGHT / 4 }]}>
        <ScrollView>{selection2}</ScrollView>
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
    top: 120,
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
export { District };
