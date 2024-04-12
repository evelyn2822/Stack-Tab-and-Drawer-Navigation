
import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { TextInput, Button, IconButton } from "react-native-paper";
import logo from "../../HFC/assets/hanz.png";

function LoginScreen(props) {
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
      <Text style={styles.greet}>Your FOODIELicious partner!</Text>
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
      <Text
        style={styles.forgot}
        onPress={() => props.navigation.navigate("Recovery")}
      >
        Forgot Password?
      </Text>
      <Button
        style={styles.login}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Landing")}
      >
        LOGIN
      </Button>
      <Text>
        Don't have an account?
        <Text
          style={{ color: "black" }}
          onPress={() => props.navigation.navigate("Signup")}
        >
          Signup.
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
  login: {
    marginTop: 10,
    width: "50%",
    backgroundColor: "#436850",
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
  forgot: {
    color: "black",
    fontSize: 12,
    textAlign: "right",
  },
  greet: {
    color: "#12372A",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    fontStyle: "italic",
  },
  email: {
    height: 40,
    width: "50%",
  },
});

export default LoginScreen;