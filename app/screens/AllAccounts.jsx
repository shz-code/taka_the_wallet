import { Pressable, Text, View } from "react-native";
import Icon from "../components/ui/Icon";

const AllAccounts = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          paddingTop: 52,
          paddingBottom: 12,
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Icon
          name="menu-sharp"
          color="#000"
          action={() => navigation.toggleDrawer()}
          clickAble
        />
        <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 26 }}>
          Accounts
        </Text>
      </View>
      <View style={{ padding: 10, gap: 10 }}>
        {/* item */}
        <Pressable
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "#000",
            padding: 5,
          }}
          onPress={() => navigation.navigate("AccountDetails")}
        >
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Icon name="menu" />
            <Text>1</Text>
          </View>
          <Text>2</Text>
        </Pressable>
      </View>
    </>
  );
};

export default AllAccounts;
