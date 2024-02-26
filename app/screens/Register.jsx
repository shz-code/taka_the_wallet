import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import Icon from "../components/ui/Icon";
import { setLocalStorage, userLoggedIn } from "../features/auth/authSlice";
import { signUp } from "../services/auth";
import styles from "../styles/styles";

const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authFailedMsg, setAuthFailedMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    // Perform login logic here
    setIsLoading(true);
    try {
      const res = await signUp(userEmail, password);
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
      <Text>User Register</Text>
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
            Registering...
          </Text>
        </View>
      ) : (
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            Register
          </Text>
        </Pressable>
      )}

      <Pressable
        style={{ alignItems: "center", marginTop: 10 }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={{ textDecorationLine: "underline" }}>
          Already have an account? Login
        </Text>
      </Pressable>
    </View>
  );
};

export default Register;
