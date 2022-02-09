import { View, Button, TextInput, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import { useState } from "react";

export default function Form({ addArticle }) {
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <Formik
      initialValues={{ name: "", anons: "", full: "", img: "" }}
      onSubmit={(values, action) => {
        setIsEmpty(false);
        action.resetForm();
        addArticle(values);
      }}
    >
      {(props) => {
        return (
          <View style={styles.formBox}>
            <TextInput
              placeholderTextColor="gray"
              style={styles.formInp}
              value={props.values.name}
              placeholder="Enter New's name..."
              onChangeText={props.handleChange("name")}
            />
            <TextInput
              placeholderTextColor="gray"
              style={styles.formInp}
              value={props.values.anons}
              placeholder="Enter New's anons..."
              onChangeText={props.handleChange("anons")}
            />
            <TextInput
              placeholderTextColor="gray"
              style={styles.formInp}
              value={props.values.full}
              multiline
              placeholder="Enter New's description..."
              onChangeText={props.handleChange("full")}
            />
            <TextInput
              placeholderTextColor="gray"
              style={styles.formInp}
              value={props.values.img}
              placeholder="Enter Img url..."
              onChangeText={props.handleChange("img")}
            />
            {isEmpty ? (
              <View style={{ width: "90%", marginBottom: 20 }}>
                <Text style={{ color: "red" }}>Please enter all fields</Text>
              </View>
            ) : null}
            <View style={[{ width: "90%", marginTop: 10 }]}>
              <Button
                title="Add"
                onPress={
                  props.values.name === "" ||
                  props.values.img === "" ||
                  props.values.anons === "" ||
                  props.values.full === ""
                    ? () => setIsEmpty(true)
                    : props.handleSubmit
                }
              />
            </View>
          </View>
        );
      }}
    </Formik>
  );
}

let styles = StyleSheet.create({
  formBox: {
    display: "flex",
    alignItems: "center",
  },
  formInp: {
    fontSize: 15,
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: "gray",
    marginBottom: 10,
    height: 50,
    width: "90%",
    color: "gray",
  },
});
