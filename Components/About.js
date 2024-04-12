
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const AboutUsPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <View style={styles.member}>
        <Image
          source={require("../../HFC/assets/belyn.jpg")}
          style={styles.memberImage}
        />
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>Evelyn Secuya</Text>
          <Text style={styles.memberRole}>Owner</Text>
        </View>
      </View>
      <View style={styles.member}>
        <Image
          source={require("../../HFC/assets/jay.jpg")}
          style={styles.memberImage}
        />
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>Jaylah Jamaica Binayao</Text>
          <Text style={styles.memberRole}>Head Manager</Text>
        </View>
      </View> 
      <View style={styles.member}>
        <Image
          source={require("../../HFC/assets/jes.jpg")}
          style={styles.memberImage}
        />
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>Jessa Mae Abarquez</Text>
          <Text style={styles.memberRole}>Manager</Text>
        </View>
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
  member: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  memberImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black"
  },
  memberRole: {
    fontSize: 16,
    color: "black"
  },
});

export default AboutUsPage;
