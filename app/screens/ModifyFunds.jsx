import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Icon from "../components/ui/Icon";

const ModifyFunds = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const options = ["Option 1", "Option 2", "Option 3"];
  const type = ["Deposit", "Option 2", "Option 3"];

  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "aqua",
        height: "100%",
        gap: 10,
      }}
    >
      <View style={{ flexDirection: "row", gap: 10 }}>
        {type.map((item) => (
          <Pressable onPress={() => alert(item)}>
            <Text
              key={item}
              style={{
                backgroundColor: "red",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 15,
              }}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>
      <View style={{ gap: 10 }}>
        <TextInput
          style={{
            backgroundColor: "#fff",
            padding: 10,
            color: "#000",
            borderRadius: 10,
          }}
          placeholder="Enter Fund Title"
        />
        <TextInput
          style={{
            backgroundColor: "#fff",
            padding: 10,
            color: "#000",
            borderRadius: 10,
          }}
          placeholder="Enter Fund Description"
        />
        <TextInput
          style={{
            backgroundColor: "#fff",
            padding: 10,
            color: "#000",
            borderRadius: 10,
          }}
          placeholder="Enter Amount"
        />
      </View>
      <View style={{ alignSelf: "center", marginTop: 10 }}>
        <Text>{new Date().toLocaleString()}</Text>
      </View>
      <View>
        <Text>Select Account</Text>
        <ScrollView>
          <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
            {/* Cart item */}
            <View
              style={{
                flexDirection: "row",
                width: 150,
                justifyContent: "space-between",
                borderWidth: 1,
                borderColor: "#000",
                padding: 5,
              }}
            >
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Icon name="menu" />
                <Text>1</Text>
              </View>
              <Text>2</Text>
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
        <Pressable
          style={{
            backgroundColor: "red",
            width: "100%",
            alignItems: "center",
            padding: 10,
            borderRadius: 10,
          }}
          onPress={() => alert("submit")}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ModifyFunds;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  selectButton: {
    padding: 10,
    backgroundColor: "#eaeaea",
  },
  selectButtonText: {
    fontSize: 16,
    color: "#333",
  },
  modalBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
  },
  optionButton: {
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
});
