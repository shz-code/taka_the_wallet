import { StyleSheet } from "react-native";
// #F4FAFF
// #287EFC
// #B1BDCF
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
    backgroundColor: "#fff",
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
  iconBox: {
    padding: 10,
    backgroundColor: "#F4FAFF",
    borderRadius: 50,
  },

  // Dashboard Add Accounts
  accountsIconContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    gap: 20,
  },

  container: {
    padding: 10,
    backgroundColor: "#fff",
    height: "100%",
    gap: 10,
  },
  fundTypeButton: {
    backgroundColor: "#F4FAFF",
    borderWidth: 2,
    borderColor: "#287EFC",
    paddingRight: 10,
    paddingLeft: 15,
    paddingTop: 7,
    borderRadius: 15,
    height: 35,
  },
  fundTypeButtonSelected: {
    backgroundColor: "#287EFC",
    color: "#fff",
  },
  input: {
    backgroundColor: "#F4FAFF",
    borderWidth: 2,
    borderColor: "#287EFC",
    padding: 10,
    color: "#000",
    borderRadius: 10,
  },
  accountCard: {
    flexDirection: "row",
    width: 160,
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    backgroundColor: "#fff",
    borderColor: "#B1BDCF",
    borderRadius: 5,
    padding: 5,
  },
  accountCardSelected: {
    borderColor: "#287EFC",
    backgroundColor: "#F4FAFF",
  },
  button: {
    backgroundColor: "#287EFC",
    width: "100%",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
});

export default styles;