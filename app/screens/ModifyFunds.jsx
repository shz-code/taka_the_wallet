import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import Icon from "../components/ui/Icon";
import styles from "../styles/styles";

const ModifyFunds = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const options = ["Option 1", "Option 2", "Option 3"];
  const type = ["Deposit", "Option 2", "Option 3"];

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        {/* Types */}
        {type.map((item) => (
          <Pressable key={item} onPress={() => alert(item)}>
            <Text
              style={{
                ...styles.fundTypeButton,
                ...styles.fundTypeButtonSelected,
              }}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>
      <View style={{ gap: 10 }}>
        <TextInput style={styles.input} placeholder="Enter Fund Title" />
        <TextInput style={styles.input} placeholder="Enter Fund Description" />
        <TextInput style={styles.input} placeholder="Enter Amount" />
      </View>
      <View style={{ alignSelf: "center", marginTop: 10 }}>
        <Text>{new Date().toLocaleString()}</Text>
      </View>
      <View>
        <Text style={styles.subHeadingText}>Select Account</Text>
        <ScrollView horizontal={true}>
          <View style={{ flexDirection: "row", gap: 10, paddingVertical: 20 }}>
            {/* Cart item */}
            <View style={{ ...styles.accountCard }}>
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <View style={styles.iconContainer}>
                  <View
                    style={{ ...styles.iconBox, backgroundColor: "#287EFC" }}
                  >
                    <Icon name="card-outline" color="#fff" />
                  </View>
                </View>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text>Name Is</Text>
                <Text>300 T</Text>
              </View>
            </View>
            {/* Cart item */}
            <View
              style={{ ...styles.accountCard, ...styles.accountCardSelected }}
            >
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <View style={styles.iconContainer}>
                  <View
                    style={{ ...styles.iconBox, backgroundColor: "#287EFC" }}
                  >
                    <Icon name="card-outline" color="#fff" />
                  </View>
                </View>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text>Name Is</Text>
                <Text>300 T</Text>
              </View>
            </View>
            {/* Cart item */}
            <View
              style={{ ...styles.accountCard, ...styles.accountCardSelected }}
            >
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <View style={styles.iconContainer}>
                  <View
                    style={{ ...styles.iconBox, backgroundColor: "#287EFC" }}
                  >
                    <Icon name="card-outline" color="#fff" />
                  </View>
                </View>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text>Name Is</Text>
                <Text>300 T</Text>
              </View>
            </View>
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
        <Pressable style={styles.button} onPress={() => alert("submit")}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            Submit
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ModifyFunds;
