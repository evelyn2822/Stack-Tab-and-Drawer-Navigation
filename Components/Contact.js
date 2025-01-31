import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ContactPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <View style={styles.contactInfo}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.info}>Tankulan, Manolo Fortich, Bukidnon</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.info}>09262377505</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>hfc@gmail.com</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#FBFADA"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#12372A",
  },
  contactInfo: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "black"
  },
  info: {
    fontSize: 16,
    color: "black"
  },
});

export default ContactPage;