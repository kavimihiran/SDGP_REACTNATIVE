import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from "react-native";
import { ImageBackground } from "react-native";
import { SoilPicker } from "./soilpicker";
import { Footer } from "../Screens/footer";
import { Header } from "../Screens/header";
import { Recommend } from "../Screens/recommend";

function SoliType(props) {
  const [choose, setchoose] = useState("Select Soil Type");
  const [Visible, setVisible] = useState(false);
  const ModelVisibility = (b) => {
    setVisible(b);
  };
  const setData = (o) => {
    if (o == "NONE") {
      setchoose("Select Soil Type");
    } else {
      setchoose(o);
      alert(o);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Header />
        <ImageBackground
          resizeMode="cover"
          borderRadius={40}
          blurRadius={2}
          style={styles.image}
          source={require("../assets/soil.jpg")}
        >
          <Image
            resizeMode="contain"
            style={styles.image1}
            source={require("../assets/logo.jpg")}
          />
        </ImageBackground>

        <Text style={styles.word}>SELECT SOIL TYPE</Text>
        <TouchableOpacity
          onPress={() => ModelVisibility(true)}
          style={styles.touchableopacity}
        >
          <Text style={styles.text}>{choose}</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="fade"
          visible={Visible}
          nClose={() => ModelVisibility(false)}
        >
          <SoilPicker ModelVisibility={ModelVisibility} setData={setData} />
        </Modal>
        <Text numberOfLines={1} style={styles.recommend}>
          RECOMMENDED SOIL TYPES
        </Text>
        <Recommend />
      </View>
      <View style={styles.button}>
        <Button
          color="black"
          title="submit"
          onPress={() => {
            alert("Sucessfullty Submitted");
          }}
        />
      </View>

      <Footer />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffd700",
    justifyContent: "center",
  },
  image: {
    top: -140,
    width: "100%",
    height: "100%",
  },
  image1: {
    bottom: 230,
    marginLeft: 170,
    borderRadius: 350,
    width: "15%",
  },
  word: {
    bottom: 300,
    alignItems: "center",
    fontFamily: "sans-serif-condensed",
    fontSize: 40,
    fontWeight: "bold",
    color: "#fffaf0",
  },
  touchableopacity: {
    bottom: 280,
    backgroundColor: "orange",
    paddingHorizontal: 20,
    width: "90%",
    borderRadius: 25,
  },
  text: {
    marginVertical: 20,
    fontSize: 20,
  },
  recommend: {
    bottom: 250,
    marginLeft: 60,
    fontSize: 26,
    width: "100%",
    fontFamily: "sans-serif-condensed",
    letterSpacing: 2,
    fontWeight: "bold",
    color: "#800000",
  },
  recommend1: {
    bottom: 350,
    color: "red",
  },
  body: {
    flex: 1,
    backgroundColor: "#ffd700",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
    borderWidth: 4,
    borderRadius: 15,
    borderColor: "black", //button background/border color
    overflow: "hidden",
  },
  touchableopacity1: {
    bottom: 140,
    backgroundColor: "orange",
    paddingHorizontal: 20,
    width: "95%",
    borderRadius: 25,
  },
  text1: {
    marginVertical: 20,
    fontSize: 20,
  },

  modal1: {
    backgroundColor: "#20b2aa",
    borderRadius: 10,
  },
});

export { SoliType };
