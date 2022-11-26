import { Text, View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { TextInput, RadioButton, Button } from "react-native-paper";
import * as React from "react";

export default function Login({ navigation }) {
  const [RadioBtnValue, setRadioBtnValue] = React.useState(false);
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.heading}>
          <Text style={{ fontSize: 50, fontWeight: "bold" }}>Login</Text>
          <Text style={{ opacity: 0.5, fontSize: 18, marginTop: 10 }}>
            Track your book reading habit with us.
          </Text>
        </View>
        <View>
          <Text style={{ marginVertical: 15, fontSize: 20 }}>
            Login with email
          </Text>
          <View>
            <TextInput label="Enter your valid email" mode="outlined" />
          </View>
          <View>
            <TextInput
              label="Enter your password"
              mode="outlined"
              style={{ marginVertical: 10 }}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              status={RadioBtnValue == true ? "checked" : "unchecked"}
              onPress={() =>
                RadioBtnValue == false
                  ? setRadioBtnValue(true)
                  : setRadioBtnValue(false)
              }
            />
            <Text style={{ fontSize: 15 }}>Remember me</Text>
          </View>
          <View style={{ alignItems: "center", marginVertical: 20 }}>
            <Button mode="outlined" style={style.submitBtn}>
              Sign in
            </Button>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Button style={{ width: "40%" }}>Forgot Password?</Button>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "grey",
            height: 1,
            opacity: 0.2,
            marginVertical: 10
          }}
        ></View>
        <View style={{ alignItems: "center" }}>
          <Button
            mode="outlined"
            style={{ width: "80%", marginTop: 10 }}
            onPress={() => navigation.navigate("Register")}
          >
            Create Account
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    paddingVertical: 80,
    paddingHorizontal: 20
  },
  heading: {
    marginBottom: 30,
    alignItems: "center"
  },
  submitBtn: {
    width: "50%"
  }
});
