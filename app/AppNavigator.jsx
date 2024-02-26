import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomDrawerContent from "./components/Drawer/CustomDrawerContent";
import Icon from "./components/ui/Icon";
import { userLoggedIn } from "./features/auth/authSlice";
import AccountDetails from "./screens/AccountDetails";
import AllAccounts from "./screens/AllAccounts";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import ModifyFunds from "./screens/ModifyFunds";
import NewAccount from "./screens/NewAccount";
import Register from "./screens/Register";

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
        options={({ route }) => ({
          title: `Details`,
          headerStyle: {
            backgroundColor: "#287EFC",
          },
          headerTintColor: "#fff",
        })}
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
  return (
    <Tabs.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#287EFC" }}
    >
      <Tabs.Screen
        options={{
          title: "Accounts",
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? "albums" : "albums-outline"}
              size={20}
              center
              color={focused ? "#287EFC" : "gray"}
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
              name={focused ? "add-circle" : "add-circle-outline"}
              size={20}
              center
              color={focused ? "#287EFC" : "gray"}
            />
          ),
        }}
        name="NewAccount"
        component={NewAccount}
      />
    </Tabs.Navigator>
  );
};

const AuthBottomTabs = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.user);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const checkStorage = async () => {
      try {
        let storage = await AsyncStorage.getItem("auth");
        if (storage) {
          storage = JSON.parse(storage);
          dispatch(
            userLoggedIn({ email: storage.email, localId: storage.userId })
          );
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (!userId) {
      checkStorage();
    }
    setAuthChecked(true);
  }, [userId]);

  return authChecked && userId ? (
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
  ) : (
    <AuthBottomTabs />
  );
};

export default AppNavigator;
