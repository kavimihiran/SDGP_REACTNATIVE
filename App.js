import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { Location } from "./apps/Screens/location";
import { SoliType } from "./apps/Screens/SoliType";
import { MainMenu } from "./apps/Screens/mainmenu";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={MainMenu} />
        <Stack.Screen name="Crop" component={Location} />
        <Stack.Screen name="Soil" component={SoliType} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
