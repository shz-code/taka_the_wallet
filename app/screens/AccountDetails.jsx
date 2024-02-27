import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import Icon from "../components/ui/Icon";
import { useGetTransactionsQuery } from "../features/transactions/transactionsApi";
import styles from "../styles/styles";

const AccountDetails = ({ route }) => {
  const { amount, name, created, category } = route.params.account;
  const [trans, setTrans] = useState([]);
  const { data, isLoading, isError } = useGetTransactionsQuery();

  useEffect(() => {
    if (!isError && !isLoading) {
      data.map((item) => {
        if (item.accountName === name && item.accountCategory === category) {
          setTrans((prev) => [...prev, item]);
        }
      });
    }
  }, [isLoading, isError, data]);

  let content = null;
  let errorText = null;
  if (isLoading) content = <Text>Loading...</Text>;
  else if (!isLoading && isError) errorText = <Text>{error.data}</Text>;
  else if (!isLoading && !isError && !data)
    errorText = <Text>Nothing Found</Text>;
  else if (!isLoading && !isError && data)
    content = (
      <FlatList
        data={trans}
        renderItem={(item) => (
          <View style={styles.transactionItem}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View style={styles.iconBox}>
                <Icon name="cart-outline" />
              </View>
              <View>
                <Text style={{ fontWeight: "500", fontSize: 18 }}>
                  {item.item.title}
                </Text>
                <Text style={{ marginTop: 5 }}>
                  {new Date(item.item.created).toLocaleString()}
                </Text>
              </View>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={{ fontWeight: "500", fontSize: 18 }}>
                {item.item.option === "Withdraw" && "-"}
                {item.item.amount} ৳
              </Text>
              <Text style={{ marginTop: 5 }}>
                {item.item.desc.length > 5
                  ? `${item.item.desc.slice(0, 5)}...`
                  : item.item.desc}
              </Text>
            </View>
          </View>
        )}
        key={(item) => item}
        maxToRenderPerBatch={2}
        style={{ height: 360 }}
      />
    );

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
              {name}{" "}
              <Text style={{ fontSize: 12, fontWeight: 400 }}>
                {" "}
                - {category}
              </Text>
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>{amount} ৳</Text>
        </View>
      </View>
      <View>
        <Text>
          Creation Date: <Text>{new Date(created).toLocaleDateString()}</Text>
        </Text>
      </View>
      {/* Transactions  */}
      <View>
        <Text style={styles.subHeadingText}>Recent Transactions</Text>
        {/* Transaction Item */}
        {errorText ? errorText : content}
      </View>
    </View>
  );
};

export default AccountDetails;
