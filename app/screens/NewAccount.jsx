import { Pressable, Text, TextInput, View } from "react-native";
import Icon from "../components/ui/Icon";
import styles from "../styles/styles";

const NewAccount = ({ navigation }) => {
  return (
    <>
      <View style={styles.customHeader}>
        <Icon
          name="menu-sharp"
          color="#fff"
          action={() => navigation.toggleDrawer()}
          clickAble
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginLeft: 26,
            color: "#fff",
          }}
        >
          Accounts
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.subHeadingText}>Create New Account</Text>
        <View style={{ gap: 10 }}>
          <TextInput style={styles.input} placeholder="Enter Account Name" />
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 100,
            left: 10,
            width: "100%",
          }}
        >
          <Pressable style={styles.button} onPress={() => alert("submit")}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
              Submit
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default NewAccount;
