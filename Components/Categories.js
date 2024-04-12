import React from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Platform } from "react-native";

const categories = [
  {
    id: 1,
    name: "Burgers",
    image: require("../../HFC/assets/bur4.jpg"),
  },
  {
    id: 2,
    name: "Pizza",
    image: require("../../HFC/assets/piz1.jpg"),
  },
  { id: 3, name: "Nachos", image: require("../../HFC/assets/nachos.png") },
  { id: 4, name: "Fries", image: require("../../HFC/assets/fries.png") },
  { id: 5, name: "Fried Chicken", image: require("../../HFC/assets/fried.png") },
  { id: 6, name: "Lumpia", image: require("../../HFC/assets/lum.png") },
  {
    id: 7,
    name: "Frappe",
    image: require("../../HFC/assets/frappe.png"),
  },
  {
    id: 8,
    name: "Shakes",
    image: require("../../HFC/assets/shake.png"),
  },
  // Add more categories with images as needed
];

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate("lc", { category: item.id })}
    >
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={Platform.OS === 'web' && styles.webContentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: "#FBFADA"
  },
  categoryItem: {
    flex: 1,
    margin: 10,
    alignItems: "center",
  },
  categoryImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  webContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CategoriesScreen;
