import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet } from "react-native";

export default function Icon({
  name,
  color = "#287EFC",
  action,
  size,
  center,
  clickAble,
}) {
  const styles = StyleSheet.create({
    container: {
      paddingLeft: !center && 16,
    },
  });

  return clickAble ? (
    <Pressable style={styles.container} onPress={action}>
      <Ionicons name={name} size={size ? size : 24} color={color} />
    </Pressable>
  ) : (
    <Ionicons name={name} size={size ? size : 24} color={color} />
  );
}
