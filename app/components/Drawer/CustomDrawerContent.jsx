import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Text, View } from "react-native";
import Icon from "../ui/Icon";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: "#F4FAFF",
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
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
