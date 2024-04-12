import * as React from "react";
import {
  View,
  text,
  Image,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Windows,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import logo from "../../HFC/assets/hanz.png";
import pizza from "../../HFC/assets/pizza.jpg";
import frappe from "../../HFC/assets/frappe.png";
import burgers from "../../HFC/assets/burgers.jpg";
import shake from "../../HFC/assets/shake.png";
import fries from "../../HFC/assets/fries.png";
import Lumpia from "../../HFC/assets/lum.png";
import Nachos from "../../HFC/assets/nachos.png";
import FriedChicken from "../../HFC/assets/fried.png";
import { TextInput } from "react-native-paper";
import Categories from "./Categories";
import HomeScreen from "./Homescreen";
import Food from "./food";
import Logos from "../../HFC/assets/hanz.png";

const { width } = Dimensions.get("window");

function LandingScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../HFC/assets/hanz.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to Hanz Foodie Corner</Text>
      <Text style={styles.description}>
        Your FOODIELicious partner.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Categories")}
      >
        <Text style={styles.buttonText}>Explore Categories</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FBFADA",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "cover",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#12372A",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    fontStyle:"italic",
  },
  button: {
    backgroundColor: "#436850",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LandingScreen;