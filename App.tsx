import { NavigationContainer } from "@react-navigation/native";
import { HomeNavigators, RootNavigators } from "navigations";
import "react-native-gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigators />
    </NavigationContainer>
  );
}
