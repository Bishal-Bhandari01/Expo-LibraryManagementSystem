import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { Avatar, Button } from "react-native-paper";

export default function Setting({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.profileImageCircle}>
            <Avatar.Image
              size={90}
              source={{
                uri: "https://aestheticblasphemy.com/static/media/images/archive/JavaScript-TheGoodParts.jpg?itok=K3YlQY2x"
              }}
            />
          </View>
          <View style={styles.details}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Guest</Text>
            {/* <Text style={{ fontSize: 16 }}>bishalbhandari390@gmail.com</Text> */}
            {/* <Text style={{ fontSize: 16 }}>22y old</Text> */}
            <Button
              mode="outlined"
              style={styles.loginBtn}
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Button>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => {
            navigation.navigate("ChangeProfile");
          }}
        >
          <View style={styles.innerListItem}>
            <TabBarIcon name="ios-person" />
            <Text style={styles.buttonText}>Change Personal Details</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => navigation.navigate("ChangePassword")}
        >
          <View style={styles.innerListItem}>
            <TabBarIcon name="key-outline" />
            <Text style={styles.buttonText}>Change Password</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <View style={styles.innerListItem}>
            <TabBarIcon name="exit-outline" />
            <Text style={styles.buttonText}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10
  },
  listItem: {
    backgroundColor: "#f6f6f6",
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 7,
    marginVertical: 10
  },
  profileItem: {
    height: 120,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 7,
    marginVertical: 6
  },
  details: {
    marginHorizontal: 20,
    width: "100%"
  },
  innerListItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "400",
    marginHorizontal: 5
  },
  profileImage: {
    color: "#000",
    fontSize: 40,
    fontWeight: "400"
  },
  profileImageCircle: {
    borderWidth: 2,
    borderColor: "#000",
    width: 80,
    height: 80,
    borderRadius: 150 / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  loginBtn: {
    width: "40%",
    fontSize: 20,
    marginTop: 10
  }
});

function TabBarIcon(props) {
  return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
}
