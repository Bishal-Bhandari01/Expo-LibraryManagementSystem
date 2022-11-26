// Learn more about createBottomTabNavigator:
// https://reactnavigation.org/docs/bottom-tab-navigator
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useColorScheme } from "react-native";

import Colors from "../constants/Colors";
import Books from "../screens/Books";
import BookDetails from "../screens/BookDetails";
import Home from "../screens/Home";
import Setting from "../screens/Setting";
import QrCode from "../screens/QrCode";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Books"
        component={BooksNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="book-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="QR Code"
        component={QrCodeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="qr-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="More"
        component={SettingNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="settings-outline" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Hometab"
        component={Home}
        options={{ headerTitle: "Home" }}
      />
    </HomeStack.Navigator>
  );
}

const MoreOptionStack = createStackNavigator();

function SettingNavigator() {
  return (
    <MoreOptionStack.Navigator>
      <MoreOptionStack.Screen
        name="Moretab"
        component={Setting}
        options={{ headerTitle: "More Options" }}
      />
    </MoreOptionStack.Navigator>
  );
}

const BookSelfStack = createStackNavigator();

function BooksNavigator() {
  return (
    <BookSelfStack.Navigator>
      <BookSelfStack.Screen
        name="Booktab"
        component={Books}
        options={{ headerTitle: "Book Self" }}
      />
    </BookSelfStack.Navigator>
  );
}

const QrcodeNav = createStackNavigator();

function QrCodeNavigator() {
  return (
    <QrcodeNav.Navigator>
      <QrcodeNav.Screen
        name="QrCodetab"
        component={QrCode}
        options={{ headerTitle: "Qr Code" }}
      />
    </QrcodeNav.Navigator>
  );
}
