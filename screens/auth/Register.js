import { Text, View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import {
  TextInput,
  RadioButton,
  Button,
  Modal,
  Portal,
  Provider
} from "react-native-paper";
import * as React from "react";

export default function Register({ navigation }) {
  const [RadioBtnValue, setRadioBtnValue] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };
  return (
    <SafeAreaView
      style={style.container}
      onPress={visible == true ? hideModal : ""}
    >
      <ScrollView>
        <Provider>
          <View style={style.heading}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              Create Your Account
            </Text>
            <Text style={{ opacity: 0.5, fontSize: 18, marginTop: 10 }}>
              Join us on this adventure.
            </Text>
          </View>
          <View>
            <View style={{ marginTop: 10 }}>
              <TextInput mode="outlined" label="Enter your fullname" />
            </View>
            <View style={{ marginTop: 10 }}>
              <TextInput
                mode="outlined"
                label="Enter your valid email"
                autoCapitalize="none"
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <TextInput
                mode="outlined"
                label="Enter your password"
                autoCapitalize="none"
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <TextInput
                mode="outlined"
                label="Enter your phone number"
                keyboardType="numeric"
              />
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <RadioButton
                status={RadioBtnValue == true ? "checked" : "unchecked"}
                onPress={() =>
                  RadioBtnValue == false
                    ? setRadioBtnValue(true)
                    : setRadioBtnValue(false)
                }
              />
              <Text style={{ justifyContent: "center" }}>
                I have read all the{" "}
              </Text>
              <Portal>
                <Modal
                  visible={visible}
                  onDismiss={hideModal}
                  contentContainerStyle={containerStyle}
                >
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                </Modal>
              </Portal>
              <Text onPress={showModal} style={{ color: "blue" }}>
                Terms and Conditions
              </Text>
            </View>
            <View style={{ marginTop: 30, alignItems: "center" }}>
              <Button mode="outlined" style={style.createAccountBtn}>
                Create Account
              </Button>
            </View>
          </View>
        </Provider>
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    paddingVertical: 80,
    paddingHorizontal: 10
  },
  heading: {
    alignItems: "center",
    marginBottom: 30
  },
  createAccountBtn: {
    width: "40%"
  }
});
