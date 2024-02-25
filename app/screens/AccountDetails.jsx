import { Text, View } from "react-native";
import Icon from "../components/ui/Icon";
import styles from "../styles/styles";

const AccountDetails = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.accountCardMain,
        }}
      >
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <View style={styles.iconContainer}>
            <View style={{ ...styles.iconBox, backgroundColor: "#287EFC" }}>
              <Icon name="card-outline" color="#fff" />
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: 600, paddingBottom: 5 }}>
              Name Is
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>500 ৳</Text>
        </View>
      </View>
      <View>
        <Text>
          Creation Date: <Text>{new Date().toLocaleDateString()}</Text>
        </Text>
      </View>
      {/* Transactions  */}
      <View>
        <Text style={styles.subHeadingText}>Recent Transactions</Text>
        {/* Transaction Item */}
        <View style={{ ...styles.transactionItem, marginTop: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <View style={styles.iconBox}>
              <Icon name="cart-outline" />
            </View>
            <View>
              <Text style={{ fontWeight: "500", fontSize: 18 }}>Netflix</Text>
              <Text style={{ marginTop: 5 }}>20 hours ago</Text>
            </View>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ fontWeight: "500", fontSize: 18 }}>-300 ৳</Text>
            <Text style={{ marginTop: 5 }}>Testing</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AccountDetails;
