import { Pressable, Text, View } from "react-native";
import styles from "../styles/styles";
import Icon from "./ui/Icon";

const AccountCard = ({ account, navigation }) => {
  const { amount, category, created, name } = account.item;
  return (
    <Pressable
      style={{
        ...styles.accountCardMain,
      }}
      onPress={() =>
        navigation.navigate("AccountDetails", { account: account.item })
      }
    >
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <View style={styles.iconContainer}>
          <View style={{ ...styles.iconBox, backgroundColor: "#287EFC" }}>
            <Icon name="card-outline" color="#fff" />
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: 600, paddingBottom: 5 }}>
            {name}
            <Text style={{ fontSize: 12, fontWeight: 400 }}> - {category}</Text>
          </Text>
          <Text>Created: {new Date(created).toLocaleDateString()}</Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 600 }}>{amount} ৳</Text>
      </View>
    </Pressable>
  );
};

export default AccountCard;
