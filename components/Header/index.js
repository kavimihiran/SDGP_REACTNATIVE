import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../apps/assets/headerLogo.png")}
        style={styles.headerLogo}
      />
    </View>
  );
};

export { Header };
