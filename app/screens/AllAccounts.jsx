import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import AccountCard from "../components/AccountCard";
import Icon from "../components/ui/Icon";
import { useGetAccountsQuery } from "../features/accounts/accountsApi";
import styles from "../styles/styles";

const AllAccounts = ({ navigation }) => {
  const { userId } = useSelector((state) => state.user);
  const { data, isLoading, isError, error } = useGetAccountsQuery();

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
        renderItem={(item) => {
          if (item.item.userId === userId)
            return <AccountCard account={item} navigation={navigation} />;
        }}
        key={(item) => item}
      />
    );
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
        {errorText && (
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
        )}
        <View>{content}</View>
      </View>
    </>
  );
};

export default AllAccounts;
