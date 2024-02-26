import axios from "axios";

export const signIn = async (email, password) => {
  return await axios.post(
    `${process.env.EXPO_PUBLIC_LOGIN_URL}${process.env.EXPO_PUBLIC_API_KEY}`,
    { email: email, password: password, returnSecureToken: true }
  );
};

export const signUp = async (email, password) => {
  return await axios.post(
    `${process.env.EXPO_PUBLIC_SIGNUP_URL}${process.env.EXPO_PUBLIC_API_KEY}`,
    { email: email, password: password, returnSecureToken: true }
  );
};
