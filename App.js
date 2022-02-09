import { StyleSheet, View, Text } from "react-native";
import * as Font from "expo-font";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import MainStack from "./Components/Navigate";

const fonts = () =>
  Font.loadAsync({
    "bung-reg": require("./assets/fonts/Bungee-Regular.ttf"),
    "ral-var": require("./assets/fonts/Raleway-VariableFont_wght.ttf"),
    "ibm-med": require("./assets/fonts/IBMPlexSansThaiLooped-Medium.ttf"),
  });
export default function App() {
  const [font, setFont] = useState(false);
  if (font) {
    return <MainStack />;
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => {
          setFont(true);
        }}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  SafeArea: {
    marginTop: 20,
  },
});
