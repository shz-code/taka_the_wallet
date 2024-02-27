import _ from "lodash";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import Icon from "../components/ui/Icon";
import {
  useAddAccountMutation,
  useGetAccountsQuery,
} from "../features/accounts/accountsApi";
import {
  useAddTransactionMutation,
  useGetTransactionsQuery,
} from "../features/transactions/transactionsApi";
import styles from "../styles/styles";

const options = ["Deposit", "Withdraw"];

const Option = ({ option, selectedOption, setSelectedOption }) => {
  return (
    <Pressable onPress={() => setSelectedOption(option)}>
      {selectedOption === option ? (
        <Text
          style={{
            ...styles.fundTypeButton,
            ...styles.fundTypeButtonSelected,
          }}
        >
          {option}
        </Text>
      ) : (
        <Text
          style={{
            ...styles.fundTypeButton,
          }}
        >
          {option}
        </Text>
      )}
    </Pressable>
  );
};

const Account = ({ account, selectedAccount, setSelectedAccount }) => {
  return (
    <Pressable
      style={
        selectedAccount.name === account.name
          ? { ...styles.accountCard, ...styles.accountCardSelected }
          : styles.accountCard
      }
      onPress={() =>
        setSelectedAccount({
          name: account.name,
          category: account.category,
          amount: account.amount,
        })
      }
      android_ripple={{ color: "F4FAFF" }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <View style={styles.iconContainer}>
          <View
            style={{
              ...styles.iconBox,
              backgroundColor: "#287EFC",
            }}
          >
            <Icon name="card-outline" color="#fff" />
          </View>
        </View>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text>{account.name}</Text>
        <Text>{account.amount} ৳</Text>
      </View>
    </Pressable>
  );
};

const ModifyFunds = ({ route, navigation }) => {
  const action = route.params.action;
  const [selectedOption, setSelectedOption] = useState(action);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState({
    name: "",
    category: "",
    amount: 0,
  });
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  const { data, isLoading, isError } = useGetAccountsQuery();
  const [addAccount] = useAddAccountMutation();

  // Get All Transactions
  const {
    data: transactions,
    isLoading: transactionLoading,
    isError: transactionError,
  } = useGetTransactionsQuery();
  const [addTransaction, { isLoading: isSubmitting }] =
    useAddTransactionMutation();

  const handleSubmit = async () => {
    setErr("");
    setSuccess("");
    if (title && desc && amount && selectedAccount.name) {
      if (
        selectedOption === "Withdraw" &&
        Number(selectedAccount.amount) < Number(amount)
      ) {
        setErr("Account has not enough balance");
      } else {
        const body = {
          title: title,
          desc: desc,
          amount: Number(amount),
          option: selectedOption,
          accountName: selectedAccount.name,
          accountCategory: selectedAccount.category,
          created: new Date().getTime(),
        };
        let newArr = [];
        if (transactions) newArr = transactions.concat(body);
        else newArr = newArr.concat(body);

        // Update Account Details with new amount
        let clonedArr = _.cloneDeep(data);
        let newAccounts = [];
        if (selectedOption === "Withdraw") {
          newAccounts = clonedArr.map((item) => {
            if (
              selectedAccount.name === item.name &&
              selectedAccount.category === item.category
            ) {
              item.amount -= Number(amount);
              return item;
            } else return item;
          });
        } else {
          newAccounts = clonedArr.map((item) => {
            if (
              selectedAccount.name === item.name &&
              selectedAccount.category === item.category
            ) {
              item.amount += Number(amount);
              return item;
            } else return item;
          });
        }
        await addTransaction(newArr);
        await addAccount(newAccounts);
        setSuccess("Created Successfully");
        setTimeout(() => navigation.goBack(), 1000);
      }
    } else {
      setErr("Fill up all the fields");
    }
  };

  return (
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
      <View style={{ flexDirection: "row", gap: 10 }}>
        {/* Types */}
        {options.map((item) => (
          <Option
            key={item}
            option={item}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        ))}
      </View>
      <View style={{ gap: 10 }}>
        <TextInput
          style={styles.input}
          placeholder="Enter Fund Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Fund Description"
          value={desc}
          onChangeText={setDesc}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="decimal-pad"
        />
      </View>
      <View style={{ alignSelf: "center", marginTop: 10 }}>
        <Text>{new Date().toLocaleString()}</Text>
      </View>
      <View>
        <Text style={styles.subHeadingText}>Select Account</Text>
        <ScrollView horizontal={true}>
          {/* Create New */}
          {/* Card item */}
          <View style={{ flexDirection: "row", gap: 10, paddingVertical: 20 }}>
            <Pressable
              style={{ ...styles.accountCard }}
              onPress={() =>
                navigation.navigate("ManageAccounts", {
                  screen: "NewAccount",
                })
              }
            >
              <View style={styles.iconContainer}>
                <View style={{ ...styles.iconBox, backgroundColor: "#287EFC" }}>
                  <Icon name="add" color="#fff" />
                </View>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text>Create New</Text>
              </View>
            </Pressable>
            {/* Other Accounts */}
            {!isLoading &&
              !isError &&
              data?.map((item, index) => (
                <Account
                  key={index}
                  account={item}
                  selectedAccount={selectedAccount}
                  setSelectedAccount={setSelectedAccount}
                />
              ))}
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 10,
          left: 10,
          width: "100%",
        }}
      >
        {isSubmitting ? (
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
  );
};

export default ModifyFunds;
