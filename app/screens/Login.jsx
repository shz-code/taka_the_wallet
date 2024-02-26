import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import Icon from "../components/ui/Icon";
import { setLocalStorage, userLoggedIn } from "../features/auth/authSlice";
import { signIn } from "../services/auth";
import styles from "../styles/styles";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authFailedMsg, setAuthFailedMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    // Perform login logic here
    setIsLoading(true);
    try {
      const res = await signIn(userEmail, password);
      const { email, localId, expiresIn } = res.data;
      dispatch(userLoggedIn({ email: email, localId: localId }));
      dispatch(
        setLocalStorage({
          email: email,
          localId: localId,
          expiresIn: expiresIn,
        })
      );
    } catch (err) {
      setAuthFailedMsg(err.response.data.error.message);
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.loginContainer}>
      <Icon name="wallet" color="#287EFC" size={32} />
      <Text style={{ ...styles.brandText, color: "#000", marginVertical: 10 }}>
        Taka - The Wallet
      </Text>
      <Text>User Login</Text>
      {authFailedMsg && (
        <View
          style={{
            backgroundColor: "red",
            width: "100%",
            alignItems: "center",
            padding: 5,
            marginTop: 5,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "#fff" }}>{authFailedMsg}</Text>
        </View>
      )}
      <View style={{ width: "100%", gap: 10, paddingVertical: 10 }}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setUserEmail}
          value={userEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
      </View>

      {isLoading ? (
        <View
          style={{
            ...styles.button,
            backgroundColor: "#B1BDCF",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>
            Login in...
          </Text>
        </View>
      ) : (
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            Login
          </Text>
        </Pressable>
      )}

      <Pressable
        style={{ alignItems: "center", marginTop: 10 }}
        onPress={() => navigation.navigate("Register")}
        disabled={isLoading}
      >
        <Text style={{ textDecorationLine: "underline" }}>
          New here? Register
        </Text>
      </Pressable>
    </View>
  );
};

export default Login;
