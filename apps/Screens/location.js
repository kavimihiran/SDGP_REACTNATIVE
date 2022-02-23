import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
import SoliType from "../Screens/SoliType";
import { SoilPicker } from "./soilpicker";

const Location = ({ navigation }) => {
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
        <View style={styles.button}>
          <Button
            color="black"
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
    color: "#ffffff",
  },
  image: {
    width: "100%",
    height: "50%",
    resizeMode: "cover",
    position: "absolute",
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
});

export { Location };
