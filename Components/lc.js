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
import shirt from "../../HFC/assets/pizza.jpg";
import jacket from "../../HFC/assets/frappe.png";
import pants from "../../HFC/assets/burgers.jpg"
import Fries from "../assets/fries.png";
import Lumpia from "../assets/lum.png";
import FriedChicken from "../assets/fried.png";
import { TextInput } from "react-native-paper";
import Categories from "./Categories";
import HomeScreen from "./Homescreen";
import Food from "./food";
import Logos from "../../HFC/assets/hanz.png";

const { width } = Dimensions.get("window");

function Landscapecat() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
     
      <Image source={Logos} style={styles.logo} />
      
      <View style={styles.photoGrid}>
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.-ecvqQzx0_a0YAsIUfwm5gHaE8?rs=1&pid=ImgDetMain",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://th.bing.com/th/id/R.f877e89f13fe0fc03217713df1944464?rik=HeA9G6n%2bktGBkg&pid=ImgRaw&r=0",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://th.bing.com/th/id/R.c4f62a681ae901217397b102c36373ad?rik=DB2X6xowgSxEOQ&pid=ImgRaw&r=0",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.WIPlVI5L7CP66P4IwBIRBwHaEK?rs=1&pid=ImgDetMain",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/78/8f/a0/788fa034cd1204548b81858f71b9bfd7.jpg",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.Q2hQSvgO939QRtLnY_dHFgHaFj?rs=1&pid=ImgDetMain",
          }}
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  logo: {
    width: width,
    height: 50,
    resizeMode: "contain",
  },
  photoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  image: {
    width: width / 2 - 10,
    height: width / 2 - 10,
    marginVertical: 5,
    resizeMode: "cover",
  },
});

export default Landscapecat;