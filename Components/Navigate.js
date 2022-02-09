import { gStyle } from "../Style/Style";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./Main";
import Info from "./Info";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="News">
        <Stack.Screen name="News" component={Main} options={gHeaderOptions} />
        <Stack.Screen name="Info" component={Info} options={gHeaderOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const gHeaderOptions = {
  headerTintColor: "silver",
  headerStyle: gStyle.gHeader,
  headerTitleStyle: gStyle.gHeaderTitle,
  headerTitleAlign: "center",
};
