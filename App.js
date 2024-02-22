import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import AppNavigator from "./app/AppNavigator";
import { store } from "./app/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
