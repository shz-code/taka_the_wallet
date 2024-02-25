import { Pressable, Text, View } from "react-native";
import Icon from "../components/ui/Icon";
import styles from "../styles/styles";

const AllAccounts = ({ navigation }) => {
  return (
    <>
      <View style={styles.customHeader}>
        <Icon
          name="menu-sharp"
          color="#fff"
          action={() => navigation.toggleDrawer()}
          clickAble
        />
        <Text style={styles.customHeaderTitle}>Accounts</Text>
      </View>
      <View style={styles.container}>
        <View style={{ gap: 10 }}>
          {/* item */}
          <Pressable
            style={{
              ...styles.accountCardMain,
            }}
            onPress={() => navigation.navigate("AccountDetails")}
          >
            <View
              style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
            >
              <View style={styles.iconContainer}>
                <View style={{ ...styles.iconBox, backgroundColor: "#287EFC" }}>
                  <Icon name="card-outline" color="#fff" />
                </View>
              </View>
              <View>
                <Text
                  style={{ fontSize: 16, fontWeight: 600, paddingBottom: 5 }}
                >
                  Name Is
                </Text>
                <Text>{new Date().toLocaleDateString()}</Text>
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: 600 }}>500 ৳</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default AllAccounts;
