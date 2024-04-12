import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ServicesPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Our Services</Text>
      <View style={styles.service}>
      <View style={styles.service}>
        <Text style={styles.serviceTitle}>Menu</Text>
        <Text style={styles.serviceDescription}>
        We offer a variety of dishes, including Fried Chicken, Lumpia, Fries, Shakes, Frappe, Burgers, Pizza, and Nachos.
        </Text>
      </View>
        <Text style={styles.serviceTitle}>Delivery</Text>
        <Text style={styles.serviceDescription}>
        We provide delivery services through platforms like Food Panda and our own delivery workers.
        </Text>
      </View>
      <View style={styles.service}>
        <Text style={styles.serviceTitle}>Catering</Text>
        <Text style={styles.serviceDescription}>
        Hanz Foodie Corner offers catering services, which can be found on HFC.
        </Text>
      </View>
      <View style={styles.service}>
        <Text style={styles.serviceTitle}>Reservations</Text>
        <Text style={styles.serviceDescription}>
         We requires reservations for dine-in customers to ensure a table is available.
        </Text>
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
  service: {
    marginBottom: 20,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "black"
  },
  serviceDescription: {
    fontSize: 16,
    color: "black"
  },
});

export default ServicesPage;