import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { TextInput, Button, IconButton } from "react-native-paper";
import logo from "../../HFC/assets/hanz.png";

function SignupScreen(props) {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [hidePassword, setHidePassword] = React.useState(true);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FBFADA",
      }}
    >
      <Image source={logo} style={styles.logo} />
      <Text style={styles.create}>CREATE ACCOUNT</Text>
      <TextInput
        style={styles.username}
        label="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.email}
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={hidePassword}
        />
        <IconButton
          icon={hidePassword ? "eye-off" : "eye"}
          onPress={togglePasswordVisibility}
          color="#000"
          style={styles.eyeIcon}
        />
      </View>
      <Button
        style={styles.signup}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Login")}
      >
        SIGNUP
      </Button>
      <Text>
        Already have an account?
        <Text
          style={{ color: "black" }}
          onPress={() => props.navigation.navigate("Login")}
        >
          Login.
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 250,
    width: 250,
  },
  signup: {
    marginTop: 10,
    width: "50%",
    backgroundColor: "#436850",
    height: 40,
  },
  passwordContainer: {
    marginTop: 10,
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    height: 40,
  },
  eyeIcon: {
    position: "absolute",
    right: 0,
  },
  email: {
    height: 40,
    width: "50%",
  },
  username: {
    marginBottom: 10,
    height: 40,
    width: "50%",
  },
  create: {
    color: "#12372A",
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 20,
  },
});

export default SignupScreen;