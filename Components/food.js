import * as React from "react";
import { View, text, Image, StyleSheet, Text, FlatList, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import logo from "../../HFC/assets/hanz.png";
import shirt from "../../HFC/assets/pizza.jpg";
import jacket from "../../HFC/assets/frappe.png";
import pants from "../../HFC/assets/burgers.jpg";
import { TextInput } from "react-native-paper";



function FoodDetails(props) {
  console.log(props);
  return (
    
    
    <ScrollView>
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#75E6DA",
        paddingBottom: 400,
        paddingTop: 30
      }}
    >
      <Image source={shirt} style={styles.logo} />
      <Text style={styles.grt}>T-Shirts</Text>
      <Text>A shirt is a cloth garment for the upper body (from the neck to the waist).
Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments. In British English, a shirt is more specifically a garment with a collar, sleeves with cuffs, and a full vertical opening with buttons or snaps (North Americans would call that a "dress shirt", a specific type of collared shirt). A shirt can also be worn with a necktie under the shirt collar.</Text>
    </View>
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 200,
  },
  login: {
    marginTop: 10,
    width: "50%",
  },
  passl: {
    marginTop: 10,
  },
  forgot: {
    color: "purple",
    fontSize: 10,
    textAlign: "right",
  },
  grt: {
    color: "purple",
    fontSize: 20,
    fontWeight: "1000",
    textAlign: "center",
  },
  logout: {
    width: "50%",
    marginTop: 10,
    backgroundColor: "#05445E",
  },
});

export default FoodDetails;