import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import { Header } from "../../components/Header";

const MainMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.menu}>
        <Image
          source={require("../assets/minus-big-symbol.png")}
          style={styles.menuIcon}
        ></Image>
        <Text style={styles.topic}>Menu</Text>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color="black"
              title="Get Crop Recomendation"
              onPress={() => {
                navigation.navigate("Crop");
              }}
            />
          </View>
          <View style={styles.space} />

          <View style={styles.button}>
            <Button
              color="black"
              title="Solutions for Common Pests and Diseases"
              onPress={() => {
                alert("Sucessfullty Submitted");
              }}
            />
          </View>
          <View style={styles.space} />
          <View style={styles.button}>
            <Button
              color="black"
              title="Fertilizer Recommendation"
              onPress={() => {
                alert("Sucessfullty Submitted");
              }}
            />
          </View>
          <View style={styles.space} />
          <View style={styles.button}>
            <Button
              color="black"
              title="Suitable Locations"
              onPress={() => {
                alert("Sucessfullty Submitted");
              }}
            />
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
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
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },

  topic: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1d1d1d",
    marginTop: 12,
  },

  menuIcon: {
    width: "5%",
    height: "5%",
    opacity: 0.15,
    resizeMode: "contain",
  },

  buttonContainer: {
    width: "100%",
    height: "100%",
    marginTop: 48,
    borderRadius: 120,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  space: {
    width: 40, // or whatever size you need
    height: 50,
  },
  button: {
    width: "90%",
    borderRadius: 120,
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 4,
    borderRadius: 15,
    backgroundColor: "black",
    //button background/border color
    overflow: "hidden",
  },
});
export { MainMenu };
