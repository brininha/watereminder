import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 35,
    textAlign: "center",
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 1
  },
  highlight: {
    color: '#bdfdff'
  },
  btn: {
    width: 100,
    height: 100,
  },
  pressedButton: {
    opacity: 0.4,
  },
});
