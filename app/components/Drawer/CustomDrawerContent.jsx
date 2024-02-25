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
        backgroundColor: "#fafa",
      }}
    >
      <View
        style={{
          padding: 20,
          flex: 1,
          alignItems: "center",
        }}
      >
        <Icon name="restaurant-sharp" color="#F53B58" size={32} />
        <Text style={{ textAlign: "center", fontWeight: "bold", marginTop: 5 }}>
          Restaurant - Native
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
