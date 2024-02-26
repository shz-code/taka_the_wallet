import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: undefined,
  userId: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.userId = action.payload.localId;
      state.email = action.payload.email;
    },
    setLocalStorage: (state, action) => {
      // Set LocalStorage
      const setStorage = async () => {
        try {
          await AsyncStorage.setItem(
            "auth",
            JSON.stringify({
              userId: action.payload.localId,
              email: action.payload.email,
              expiresIn: new Date(
                new Date().getTime() + action.payload.expiresIn * 1000
              ),
            })
          );
        } catch (error) {
          console.log(err);
        }
      };
      setStorage();
    },
    userLoggedOut: (state) => {
      state.userId = undefined;
      state.email = undefined;
      // Remove local storage
      const clr = async () => {
        await AsyncStorage.removeItem("auth");
      };
      clr();
    },
  },
});

export const { userLoggedIn, userLoggedOut, setLocalStorage } =
  authSlice.actions;
export default authSlice.reducer;
