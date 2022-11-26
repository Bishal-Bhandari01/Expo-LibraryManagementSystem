import { Text, View, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-paper";

const ChangePassword = ({navigation}) => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.input}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Old Password:</Text>
        <TextInput style={style.passwordInput} secureTextEntry={true} />
      </View>
      <View style={style.input}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>New Password:</Text>
        <TextInput style={style.passwordInput} secureTextEntry={true} />
      </View>
      <View style={style.input}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Confirm Password:
        </Text>
        <TextInput style={style.passwordInput} secureTextEntry={true} />
      </View>
      <View style={style.confirmBtnView}>
        <Button mode="outlined" style={style.confirmBtn}
        onPress={()=>navigation.navigate("More")}>Save</Button>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;

const style = StyleSheet.create({
  container: {
    padding: 10
  },
  input: {
    marginTop: 10
  },
  passwordInput: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 30,
    paddingLeft: 20
  },
  confirmBtnView: {
    marginTop: 40,
    alignItems: "center"
},
  confirmBtn: {
    width: '40%'
  }
});
