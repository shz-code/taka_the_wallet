import { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Accounts from "../components/Dashboard/Accounts";
import Transactions from "../components/Dashboard/Transactions";
import Icon from "../components/ui/Icon";
import { useGetAccountsQuery } from "../features/accounts/accountsApi";
import styles from "../styles/styles";

const Dashboard = ({ navigation }) => {
  const { data, isLoading, isError } = useGetAccountsQuery();
  const { userId } = useSelector((state) => state.user);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (!isError && !isLoading && data?.length) {
      let bal = 0;
      data.map((item) => {
        if (item.userId === userId) bal += item.amount;
      });
      setBalance(bal);
    }
  }, [isLoading, isError, data]);
  return (
    <View>
      <View style={{ position: "relative" }}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1579546928686-286c9fbde1ec?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          <Text style={styles.headingText}>{balance} ৳</Text>
          <View style={styles.heroActions}>
            <Pressable
              style={styles.iconContainer}
              onPress={() =>
                navigation.navigate("ModifyFunds", { action: "Deposit" })
              }
            >
              <View style={styles.iconBox}>
                <Icon name="card-outline" />
              </View>
              <Text style={{ color: "#fff" }}>Add Money</Text>
            </Pressable>
            <Pressable
              style={styles.iconContainer}
              onPress={() =>
                navigation.navigate("ModifyFunds", { action: "Withdraw" })
              }
            >
              <View style={styles.iconBox}>
                <Icon name="cash-outline" />
              </View>
              <Text style={{ color: "#fff" }}>Withdraw Money</Text>
            </Pressable>
          </View>
        </View>
      </View>
      {/* Body */}
      <View style={styles.container}>
        {/* All Accounts */}
        <View>
          <Text style={styles.subHeadingText}>Your Accounts</Text>
          <View style={styles.accountsIconContainer}>
            {/* New Account */}
            <Pressable
              style={styles.iconContainer}
              onPress={() =>
                navigation.navigate("ManageAccounts", { screen: "NewAccount" })
              }
            >
              <View style={styles.iconBox}>
                <Icon name="add" />
              </View>
              <Text>Add</Text>
            </Pressable>
            {/* Accounts */}
            <Accounts />
          </View>
        </View>
        {/* Transactions */}
        <View>
          <Text style={styles.subHeadingText}>Recent Transactions</Text>
          {/* Transactions Container */}
          <Transactions />
        </View>
      </View>
      {/* Action Button */}
      <View
        style={{
          position: "absolute",
          top: "65%",
          right: 10,
          zIndex: 1,
          height: "100%",
        }}
      >
        <Pressable
          style={{ ...styles.iconContainer, opacity: 0.5 }}
          onPress={() =>
            navigation.navigate("ModifyFunds", { action: "Deposit" })
          }
        >
          <View
            style={{
              ...styles.iconBox,
              backgroundColor: "#287EFC",
              borderRadius: 15,
              padding: 20,
            }}
          >
            <Icon name="add" color="#fff" size={30} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Dashboard;
