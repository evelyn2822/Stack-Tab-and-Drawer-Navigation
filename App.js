import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Components/Homescreen";
import LoginScreen from "./Components/Login";
import SignupScreen from "./Components/Signup";
import RecoveryScreen from "./Components/Recovery";
import LandingScreen from "./Components/Landing";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "./Components/Categories";
import FoodDetails from "./Components/food";
import Landscapecat from "./Components/lc";
import Portraitcat from "./Components/pc";
import ServicesPage from "./Components/service";
import AboutUsPage from "./Components/About";
import ContactPage from "./Components/Contact";
import FilterPage from "./Components/filters";
import FavoritesPage from "./Components/Favorites";

import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from expo vector icons

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingScreen">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Recovery" component={RecoveryScreen} />
        <Stack.Screen name="Landscapecat" component={Landscapecat} />
        <Stack.Screen name="Portraitcat" component={Portraitcat} />
        <Stack.Screen name="Food" component={FoodDetails} />
        <Stack.Screen
          name="Landing"
          component={MyDrawer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={LandingScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Categories" 
        component={CategoriesScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="list" size={24} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Favorites" 
        component={FavoritesPage} 
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" size={24} color={color} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ drawerStyle: { backgroundColor: 'white' }}}>
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Services" component={ServicesPage} />
      <Drawer.Screen name="Filters" component={FilterPage} />
      <Drawer.Screen name="About Us" component={AboutUsPage} />
      <Drawer.Screen name="Contact" component={ContactPage} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
