import { Pressable, Text, TextInput, View } from "react-native";
import Icon from "../components/ui/Icon";

const NewAccount = ({ navigation }) => {
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
      <View
        style={{
          padding: 10,
          backgroundColor: "aqua",
          height: "100%",
          gap: 10,
        }}
      >
        <Text>Create New Account</Text>
        <View style={{ gap: 10 }}>
          <TextInput
            style={{
              backgroundColor: "#fff",
              padding: 10,
              color: "#000",
              borderRadius: 10,
            }}
            placeholder="Enter Account Name"
          />
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 10,
            left: 10,
            width: "100%",
          }}
        >
          <Pressable
            style={{
              backgroundColor: "red",
              width: "100%",
              alignItems: "center",
              padding: 10,
              borderRadius: 10,
            }}
            onPress={() => alert("submit")}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Submit</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default NewAccount;
