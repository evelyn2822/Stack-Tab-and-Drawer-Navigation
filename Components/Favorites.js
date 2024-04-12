import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get('window').width;

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([
    { id: 1, imageUrl: require("../../HFC/assets/burgers.jpg") },
    { id: 2, imageUrl: require("../../HFC/assets/pizza.jpg") },
    { id: 3, imageUrl: require("../../HFC/assets/frappe.png") },
    { id: 4, imageUrl: require("../../HFC/assets/nachos.png") },
    // Add more favorite photos as needed
  ]);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((photo) => photo.id !== id));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <View style={styles.photosContainer}>
        {favorites.map((photo) => (
          <TouchableOpacity
            key={photo.id}
            onPress={() => removeFavorite(photo.id)}
          >
            <Image source={photo.imageUrl} style={styles.photo} />
          </TouchableOpacity>
        ))}
      </View>
      {favorites.length === 0 && (
        <Text style={styles.emptyMessage}>No favorites yet.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#FBFADA",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black"
  },
  photosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  photo: {
    width: 300,
    height:300,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  emptyMessage: {
    fontSize: 16,
    fontStyle: "italic",
    marginTop: 20,
  },
});

export default FavoritesPage;
