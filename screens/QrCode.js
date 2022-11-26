import { TextInput, Button } from "react-native-paper";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import * as React from "react";
import QRCode from "react-native-qrcode-svg";

export default function QrCode({ navigation }) {
  const [text, setText] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.inputFieldView}>
          <TextInput
            label="Enter the book code"
            mode="outlined"
            onChangeText={(text) => setText(text)}
          />
        </View>
        <View style={styles.qrcodeView}>
            <QRCode value={text ? text : 'N/A'} size={300} />
        </View>
        <View style={styles.actionbtn}>
            <Button mode="outlined">Download</Button>
        </View>
        <View style={styles.actionbtn}>
            <Button mode="outlined" onPress={()=> navigation.navigate("ScanQrCode")}>Scan QRCode</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  inputFieldView: {
    width: "100%",
    padding: 20
  },
  qrcodeView: {
    alignItems: 'center',
    marginTop: 20,
  },
  actionbtn: {
    alignItems: 'center',
    marginTop: 40,
  }
});
