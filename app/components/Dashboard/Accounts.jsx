import { ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useGetAccountsQuery } from "../../features/accounts/accountsApi";
import styles from "../../styles/styles";
import Icon from "../ui/Icon";

const Accounts = () => {
  const { data, isLoading, isError, error } = useGetAccountsQuery();
  const { userId } = useSelector((state) => state.user);
  let content = null;
  let errorText = null;
  if (isLoading) content = <Text>Loading...</Text>;
  else if (!isLoading && isError) errorText = <Text>{error.data}</Text>;
  else if (!isLoading && !isError && !data)
    errorText = <Text>Nothing Found</Text>;
  else if (!isLoading && !isError && data)
    content = data.map((item, index) => {
      if (item.userId === userId)
        return (
          <View key={index} style={styles.iconContainer}>
            <View style={styles.iconBox}>
              <Icon name="wallet-outline" />
            </View>
            <Text>{item.name}</Text>
          </View>
        );
    });

  return (
    <ScrollView horizontal={data?.length > 6 ? true : false}>
      {errorText ? (
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
          <Text style={{ color: "#fff" }}>{errorText}</Text>
        </View>
      ) : (
        <View style={{ flexDirection: "row", gap: 10 }}>{content}</View>
      )}
    </ScrollView>
  );
};

export default Accounts;
