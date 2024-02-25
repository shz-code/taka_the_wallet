import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import CustomDrawerContent from "./components/Drawer/CustomDrawerContent";
import Icon from "./components/ui/Icon";
import AllAccounts from "./screens/AllAccounts";
import Dashboard from "./screens/Dashboard";
import NewAccount from "./screens/NewAccount";

const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const DashboardStack = () => {
  const navigation = useNavigation();
  const style = StyleSheet.create({
    pr: {
      paddingRight: 25,
    },
  });
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          paddingRight: 10,
        },
        headerLeft: () => (
          <View style={style.pr}>
            <Icon
              name="menu-sharp"
              color="#000"
              action={() => navigation.toggleDrawer()}
              clickAble
              center
            />
          </View>
        ),
      }}
    >
      <Stack.Screen name="Home" component={Dashboard} />
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
          title: "Account",
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? "home" : "home-outline"}
              size={20}
              center
              color={focused ? "#F53B58" : "gray"}
            />
          ),
        }}
        name="AllAccounts"
        component={AllAccounts}
      />
      <Tabs.Screen
        name="NewAccount"
        component={NewAccount}
        options={{ title: "Manage" }}
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
        drawerActiveTintColor: "#F53B58",
      }}
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name={focused ? "home" : "home-outline"}
              color={focused ? "#F53B58" : "gray"}
              size={20}
            />
          ),
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <Drawer.Screen
        options={{
          title: "Manage",
          drawerIcon: ({ focused }) => (
            <Icon
              name={focused ? "home" : "home-outline"}
              color={focused ? "#F53B58" : "gray"}
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
