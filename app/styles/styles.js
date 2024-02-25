import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  brandTextContainer: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    alignItems: "center",
  },
  brandText: { color: "#fff", fontSize: 20 },
  headingText: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
  },
  subHeadingText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  heroBg: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "#000",
    opacity: 0.7,
  },
  heroActions: {
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
  },
  balance: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  image: { width: "100%", height: 300 },
  dashboardBody: {
    padding: 10,
    backgroundColor: "aqua",
    height: "100%",
  },
  dashboardMenuIcon: {
    position: "absolute",
    top: 50,
    left: 0,
    zIndex: 1,
    width: "100%",
  },
  iconContainer: {
    alignItems: "center",
    gap: 5,
  },
  iconBox: { padding: 10, backgroundColor: "red", borderRadius: 50 },

  // Dashboard Add Accounts
  accountsIconContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    gap: 20,
  },
});

export default styles;
