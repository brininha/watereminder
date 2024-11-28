import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#E3F2FD",
  },
  textContainer: {
    alignItems: "center",
    paddingBottom: 100
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1565C0",
    margin: 10,
    marginTop: 20,
    textTransform:'uppercase'
  },
  label: {
    margin: 20,
    fontSize: 20,
    color: "#333",
    textAlign: 'center'
  },
});

export default styles;
