import { StyleSheet, Text, View, Image } from "react-native";
import { gStyle } from "../Style/Style";

export default function Info({ route }) {
  return (
    <View style={styles.mainBox}>
      <Text style={[gStyle.gTitle, { fontSize: 35 }]}>{route.params.name}</Text>
      <Text style={styles.overTitle}>{route.params.anons}</Text>
      <Image
        style={{
          borderRadius: 8,
          width: "100%",
          height: 200,
          marginBottom: 10,
        }}
        source={{
          uri: route.params.img,
        }}
      />
      <Text>{route.params.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBox: {
    paddingHorizontal: 10,
    height: "100%",
    backgroundColor: "#838383",
  },
  overTitle: {
    textAlign: "center",
    color: "#363636",
    marginBottom: 35,
  },
});
