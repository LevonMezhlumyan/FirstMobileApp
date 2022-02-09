import { useState } from "react";
import Form from "./Formik/Formik";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { gStyle } from "../Style/Style";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

//
export default function Main({ navigation }) {
  function loadSense(item) {
    navigation.navigate("Info", item);
  }
  const [popup, setPopup] = useState(false);
  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Google !!",
      full: "Google is cool! That's a great new. Return back ! Google is cool! That's a great new. Return back !Google is cool! That's a great new. Return back !Google is cool! That's a great new. Return back !Google is cool! That's a great new. Return back !Google is cool! That's a great new. Return back !Google is cool! That's a great new. Return back !Google is cool! That's a great new. Return back !",
      img: "https://www.ixbt.com/img/n1/news/2022/0/2/img-mitchell-luo-jz4ca36oJ_M-unsplash_large.jpg",
      key: Math.random().toString(16).slice(2),
    },
    {
      name: "Facebook",
      anons: "Facebook !!",
      full: "Facebook is cool! That's a great new. Return back ! Facebook is cool! That's a great new. Return back !Facebook is cool! That's a great new. Return back !Facebook is cool! That's a great new. Return back !Facebook is cool! That's a great new. Return back !Facebook is cool! That's a great new. Return back !Facebook is cool! That's a great new. Return back !Facebook is cool! That's a great new. Return back !Facebook is cool! That's a great new. Return back !Facebook is cool! That's a great new. Return back !Facebook is cool! That's a great new. Return back !Facebook is cool! That's a great new. Return back !",
      img: "https://cdnn21.img.ria.ru/images/07e5/06/0b/1736609985_0:249:3071:1976_1920x0_80_0_0_f5325a77d9a5aabc700c6832206d9ae8.jpg",
      key: Math.random().toString(16).slice(2),
    },
    {
      name: "Amazon",
      anons: "Amazon !!",
      full: "Amazon is cool!  That's a great new. Return back ! Amazon is cool!  That's a great new. Return back !Amazon is cool!  That's a great new. Return back !Amazon is cool!  That's a great new. Return back !Amazon is cool!  That's a great new. Return back !Amazon is cool!  That's a great new. Return back !Amazon is cool!  That's a great new. Return back !Amazon is cool!  That's a great new. Return back !Amazon is cool!  That's a great new. Return back !Amazon is cool!  That's a great new. Return back !Amazon is cool!  That's a great new. Return back !",
      img: "https://d1e00ek4ebabms.cloudfront.net/production/bbdd464a-04e2-4a5a-8cbe-198465d68fdb.jpg",
      key: Math.random().toString(16).slice(2),
    },
    {
      name: "Mercedes",
      anons: "Mercedes !!",
      full: "Mercedes is cool!  That's a great new. Return back ! Mercedes is cool!  That's a great new. Return back !Mercedes is cool!  That's a great new. Return back !Mercedes is cool!  That's a great new. Return back !Mercedes is cool!  That's a great new. Return back !Mercedes is cool!  That's a great new. Return back !Mercedes is cool!  That's a great new. Return back !Mercedes is cool!  That's a great new. Return back !Mercedes is cool!  That's a great new. Return back !Mercedes is cool!  That's a great new. Return back !Mercedes is cool!  That's a great new. Return back !Mercedes is cool!  That's a great new. Return back !",
      img: "https://thequizgamemaster.com/wp-content/uploads/2020/08/01-mercedes-benz-ag-unternehmen-3400x1440-1.jpg",
      key: Math.random().toString(16).slice(2),
    },
  ]);
  function addArticle(article) {
    (article.key = Math.random().toString(16).slice(2)),
      setNews((list) => {
        return [article, ...list];
      });
    setPopup(false);
  }
  return (
    <View style={styles.mainBox}>
      <Modal visible={popup}>
        <View style={{ flex: 1, backgroundColor: "#1E1E1E" }}>
          <TouchableOpacity onPress={() => setPopup(false)}>
            <AntDesign
              name="closecircle"
              size={34}
              color="black"
              style={{ color: "gray", margin: 10 }}
            />
          </TouchableOpacity>
          <Text
            style={[
              gStyle.gHeaderTitle,
              { color: "gray", textAlign: "center" },
            ]}
          >
            Add News
          </Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setPopup(true)}>
        <Entypo
          name="add-to-list"
          size={34}
          color="black"
          style={{ textAlign: "right", color: "#363636" }}
        />
      </TouchableOpacity>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={news}
        keyExtractor={(data) => data.key}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            style={styles.newForm}
            onPress={() => {
              loadSense(item);
            }}
          >
            <TouchableOpacity>
              <Text style={gStyle.gTitle}>{item.name}</Text>
            </TouchableOpacity>
            <Image
              style={{
                borderRadius: 8,
                width: "100%",
                height: 200,
              }}
              source={{
                uri: item.img,
              }}
            />
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainBox: {
    paddingHorizontal: 10,
    height: "100%",
    backgroundColor: "#838383",
  },
  newForm: {
    marginTop: 10,
    marginBottom: 20,
  },
});
