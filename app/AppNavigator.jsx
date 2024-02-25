import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import CustomDrawerContent from "./components/Drawer/CustomDrawerContent";
import Icon from "./components/ui/Icon";
import AccountDetails from "./screens/AccountDetails";
import AllAccounts from "./screens/AllAccounts";
import Dashboard from "./screens/Dashboard";
import ModifyFunds from "./screens/ModifyFunds";
import NewAccount from "./screens/NewAccount";

const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AllAccountsStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={AllAccounts}
      />
      <Stack.Screen
        options={({ route }) => ({ title: `Details` })}
        name="AccountDetails"
        component={AccountDetails}
      />
    </Stack.Navigator>
  );
};

const DashboardStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Dashboard}
      />
      <Stack.Screen
        options={{
          title: `Modify Funds`,
          headerStyle: {
            backgroundColor: "#287EFC",
          },
          headerTintColor: "#fff",
        }}
        name="ModifyFunds"
        component={ModifyFunds}
      />
    </Stack.Navigator>
  );
};

const ManageAccountsBottomTabs = () => {
  const navigation = useNavigation();
  const style = StyleSheet.create({
    pr: {
      paddingRight: 10,
    },
  });
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        headerTitle: "Accounts",
        tabBarActiveTintColor: "#F53B58",
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerLeft: () => (
          <View style={style.pr}>
            <Icon
              name="menu-sharp"
              color="#000"
              action={() => navigation.toggleDrawer()}
              clickAble
            />
          </View>
        ),
      }}
    >
      <Tabs.Screen
        options={{
          title: "Accounts",
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? "home" : "home-outline"}
              size={20}
              center
              color={focused ? "#F53B58" : "gray"}
            />
          ),
        }}
        name="AllAccountsStack"
        component={AllAccountsStack}
      />
      <Tabs.Screen
        options={{
          title: "New Account",
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? "home" : "home-outline"}
              size={20}
              center
              color={focused ? "#F53B58" : "gray"}
            />
          ),
        }}
        name="NewAccount"
        component={NewAccount}
      />
    </Tabs.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#287EFC",
      }}
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name={focused ? "cash" : "cash-outline"}
              color={focused ? "#287EFC" : "gray"}
              size={20}
            />
          ),
        }}
        name="Dashboard"
        component={DashboardStack}
      />
      <Drawer.Screen
        options={{
          title: "Manage",
          drawerIcon: ({ focused }) => (
            <Icon
              name={focused ? "wallet" : "wallet-outline"}
              color={focused ? "#287EFC" : "gray"}
              size={20}
            />
          ),
        }}
        name="ManageAccounts"
        component={ManageAccountsBottomTabs}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
