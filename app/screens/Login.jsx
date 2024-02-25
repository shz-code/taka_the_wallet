import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Icon from "../components/ui/Icon";
import styles from "../styles/styles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.loginContainer}>
      <Icon name="wallet" color="#287EFC" size={32} />
      <Text style={{ ...styles.brandText, color: "#000", marginVertical: 10 }}>
        Taka - The Wallet
      </Text>
      <Text>User Login</Text>
      <View style={{ width: "100%", gap: 10, paddingVertical: 10 }}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
      </View>

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          Login
        </Text>
      </Pressable>
      <Pressable
        style={{ alignItems: "center", marginTop: 10 }}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={{ textDecorationLine: "underline" }}>
          New here? Register
        </Text>
      </Pressable>
    </View>
  );
};

export default Login;
