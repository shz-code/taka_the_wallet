import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../features/auth/authSlice";
import Icon from "../ui/Icon";

const CustomDrawerContent = (props) => {
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: "#F4FAFF",
        position: "relative",
      }}
    >
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <Icon name="wallet" color="#287EFC" size={32} />
        <Text
          style={{
            fontWeight: "bold",
            marginTop: 5,
          }}
        >
          Taka - The Wallet
        </Text>
      </View>
      <DrawerItemList {...props} />
      <Pressable
        style={{
          width: "100%",
          paddingHorizontal: 18,
          paddingVertical: 15,
          flexDirection: "row",
          gap: 29,
        }}
        onPress={() => dispatch(userLoggedOut())}
      >
        <Icon name="exit-outline" color="gray" />
        <Text style={{ color: "gray", fontWeight: 600 }}>Logout</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
