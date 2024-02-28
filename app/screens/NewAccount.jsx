import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../components/ui/Icon";
import {
  useAddAccountMutation,
  useGetAccountsQuery,
} from "../features/accounts/accountsApi";
import styles from "../styles/styles";

const categories = ["Bank", "MFS", "Cash"];

const NewAccount = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  const { data } = useGetAccountsQuery();
  const [addAccount] = useAddAccountMutation();

  const { userId } = useSelector((state) => state.user);

  const handleSubmit = async () => {
    setErr("");
    setSuccess("");
    setIsLoading(true);
    if (name && category) {
      const body = {
        name: name,
        category: category,
        created: new Date().getTime(),
        amount: 0,
        userId: userId,
      };
      let newArr = [];
      if (data) newArr = data.concat(body);
      else newArr = newArr.concat(body);
      const res = await addAccount(newArr);
      setSuccess("Created Successfully");
    } else {
      setErr("Fill up all the fields");
    }
    setIsLoading(false);
  };

  return (
    <>
      {/* Custom Header */}
      <View style={styles.customHeader}>
        <Icon
          name="menu-sharp"
          color="#fff"
          action={() => navigation.toggleDrawer()}
          clickAble
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginLeft: 26,
            color: "#fff",
          }}
        >
          Accounts
        </Text>
      </View>
      <View style={styles.container}>
        {(err || success) && (
          <View
            style={{
              backgroundColor: err ? "red" : "green",
              width: "100%",
              alignItems: "center",
              padding: 5,
              marginTop: 5,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "#fff" }}>{err ? err : success}</Text>
          </View>
        )}
        <Text style={styles.subHeadingText}>Create New Account</Text>
        {/* Input */}
        <View style={{ gap: 10 }}>
          <TextInput
            style={styles.input}
            placeholder="Enter Account Name"
            value={name}
            onChangeText={setName}
          />
        </View>
        {/* Category */}
        <View>
          <Text style={styles.subHeadingText}>Select Category</Text>
          <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
            {categories.map((item) => (
              <Pressable key={item} onPress={() => setCategory(item)}>
                <Text
                  style={
                    category != item
                      ? { ...styles.fundTypeButton }
                      : {
                          ...styles.fundTypeButton,
                          ...styles.fundTypeButtonSelected,
                        }
                  }
                >
                  {item}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
        {/* Submit Button */}
        <View
          style={{
            position: "absolute",
            bottom: 100,
            left: 10,
            width: "100%",
          }}
        >
          {isLoading ? (
            <View
              style={{
                ...styles.button,
                backgroundColor: "#B1BDCF",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>
                Submitting...
              </Text>
            </View>
          ) : (
            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
                Submit
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    </>
  );
};

export default NewAccount;
