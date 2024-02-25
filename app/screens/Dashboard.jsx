import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "../components/ui/Icon";
import styles from "../styles/styles";

const Dashboard = ({ navigate }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{ position: "relative" }}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.image}
        />
        <View style={styles.dashboardMenuIcon}>
          <View
            style={{
              flexDirection: "row",
              position: "relative",
            }}
          >
            <Icon
              name="menu-sharp"
              color="#fff"
              action={() => navigation.toggleDrawer()}
              clickAble
              size={30}
            />
            <View style={styles.brandTextContainer}>
              <Text style={styles.brandText}>Taka - The Wallet</Text>
            </View>
          </View>
        </View>
        <View style={styles.heroBg}></View>
        <View style={styles.balance}>
          <Text style={{ color: "#fff", fontSize: 15 }}>Total Balance</Text>
          <Text style={styles.headingText}>1500.00 ৳</Text>
          <View style={styles.heroActions}>
            <Pressable style={styles.iconContainer} onPress={() => alert("ok")}>
              <View style={styles.iconBox}>
                <Icon name="menu" />
              </View>
              <Text style={{ color: "#fff" }}>Add Money</Text>
            </Pressable>
            <View style={styles.iconContainer}>
              <View style={styles.iconBox}>
                <Icon name="menu" />
              </View>
              <Text style={{ color: "#fff" }}>Add Money</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Body */}
      <ScrollView style={styles.dashboardBody}>
        {/* All Accounts */}
        <View>
          <Text style={styles.subHeadingText}>Your Accounts</Text>
          <View style={styles.accountsIconContainer}>
            <View style={styles.iconContainer}>
              <View style={styles.iconBox}>
                <Icon name="menu" />
              </View>
              <Text>Add</Text>
            </View>
            <ScrollView horizontal={false}>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <View style={styles.iconContainer}>
                  <View style={styles.iconBox}>
                    <Icon name="menu" />
                  </View>
                  <Text>Add</Text>
                </View>
                <View style={styles.iconContainer}>
                  <View style={styles.iconBox}>
                    <Icon name="menu" />
                  </View>
                  <Text>Add</Text>
                </View>
                <View style={styles.iconContainer}>
                  <View style={styles.iconBox}>
                    <Icon name="menu" />
                  </View>
                  <Text>Add</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        {/* Transactions */}
        <View>
          <Text style={styles.subHeadingText}>Recent Transactions</Text>
          {/* Transactions Container */}
          <View>
            {/* Transaction Item */}
            <SafeAreaView
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomColor: "#000",
                borderBottomWidth: 1,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <View style={styles.iconBox}>
                  <Icon name="menu" />
                </View>
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                    Netflix
                  </Text>
                  <Text style={{ marginTop: 5 }}>20 hours ago</Text>
                </View>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>-300 ৳</Text>
                <Text style={{ marginTop: 5 }}>Testing</Text>
              </View>
            </SafeAreaView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
