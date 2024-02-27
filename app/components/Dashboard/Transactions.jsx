import { FlatList, Text, View } from "react-native";

import { useGetTransactionsQuery } from "../../features/transactions/transactionsApi";
import styles from "../../styles/styles";
import Icon from "../ui/Icon";

const Transactions = () => {
  const { data, isLoading, isError } = useGetTransactionsQuery();

  let content = null;
  let errorText = null;
  if (isLoading) content = <Text>Loading...</Text>;
  else if (!isLoading && isError) errorText = <Text>{error.data}</Text>;
  else if (!isLoading && !isError && !data)
    errorText = <Text>Nothing Found</Text>;
  else if (!isLoading && !isError && data)
    content = (
      <FlatList
        data={data}
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
              <Text style={{ marginTop: 5 }}>Testing</Text>
            </View>
          </View>
        )}
        key={(item) => item}
        maxToRenderPerBatch={2}
        style={{ height: 360 }}
      />
    );
  return (
    <View>
      {/* Transaction Item */}
      {errorText ? errorText : content}
    </View>
  );
};

export default Transactions;
