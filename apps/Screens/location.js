import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native";
import { SoliType } from "../Screens/SoliType";
import { SoilPicker } from "./soilpicker";
import { Province } from "./provincepicker";
import { District } from "./district";
import { City } from "./city";

const Location = ({ navigation }) => {
  const [choose1, setchoose1] = useState("Select Province");
  const [Visible1, setVisible1] = useState(false);
  const ModelVisibility1 = (b) => {
    setVisible1(b);
  };
  const setData1 = (o) => {
    if (o == "NONE") {
      setchoose1("Select Province");
    } else {
      setchoose1(o);
      alert(o);
    }
  };
  const [choose2, setchoose2] = useState("Select District");
  const [Visible2, setVisible2] = useState(false);
  const ModelVisibility2 = (b) => {
    setVisible2(b);
  };
  const setData2 = (o) => {
    if (o == "NONE") {
      setchoose2("Select District");
    } else {
      setchoose2(o);
      alert(o);
    }
  };
  const [choose3, setchoose3] = useState("Select City");
  const [Visible3, setVisible3] = useState(false);
  const ModelVisibility3 = (b) => {
    setVisible3(b);
  };
  const setData3 = (o) => {
    if (o == "NONE") {
      setchoose3("Select City");
    } else {
      setchoose3(o);
      alert(o);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.cropContainer}>
        <ImageBackground
          source={require("../assets/img1.jpeg")}
          style={styles.image}
        ></ImageBackground>

        <View style={styles.titles}>
          <Text style={styles.title}>Select Location</Text>
        </View>
        <TouchableOpacity
          onPress={() => ModelVisibility1(true)}
          style={styles.touchableopacity}
        >
          <Text style={styles.text}>{choose1}</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="fade"
          visible={Visible1}
          nClose={() => ModelVisibility1(false)}
        >
          <Province ModelVisibility1={ModelVisibility1} setData1={setData1} />
        </Modal>
        <TouchableOpacity
          onPress={() => ModelVisibility2(true)}
          style={styles.touchableopacity1}
        >
          <Text style={styles.text}>{choose2}</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="fade"
          visible={Visible2}
          nClose={() => ModelVisibility2(false)}
        >
          <District ModelVisibility2={ModelVisibility2} setData2={setData2} />
        </Modal>
        <TouchableOpacity
          onPress={() => ModelVisibility3(true)}
          style={styles.touchableopacity2}
        >
          <Text style={styles.text}>{choose3}</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="fade"
          visible={Visible3}
          nClose={() => ModelVisibility3(false)}
        >
          <City ModelVisibility3={ModelVisibility3} setData3={setData3} />
        </Modal>
        <View style={styles.button}>
          <Button
            fontSize="40"
            fontWeight="bold"
            color="orange"
            title="submit"
            onPress={() => {
              navigation.navigate("Soil");
            }}
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  cropContainer: {
    width: "100%",
    height: "100%",
  },
  titles: {
    marginTop: "60%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
    color: "black",
  },
  image: {
    width: "100%",
    height: "50%",
    resizeMode: "cover",
    position: "absolute",
  },
  button: {
    marginTop: 150,
    marginLeft: 50,
    marginRight: 50,
    borderWidth: 4,
    borderRadius: 15,
    borderColor: "black", //button background/border color
    overflow: "hidden",
  },
  touchableopacity: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    width: "90%",
    borderRadius: 25,
    top: 20,
    marginLeft: 20,
  },
  touchableopacity1: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    width: "90%",
    borderRadius: 25,
    top: 40,
    marginLeft: 20,
  },
  touchableopacity2: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    width: "90%",
    borderRadius: 25,
    top: 60,
    marginLeft: 20,
  },
  text: {
    marginVertical: 20,
    fontSize: 20,
  },
});

export { Location };
