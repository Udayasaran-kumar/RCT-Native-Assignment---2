import { View, Text, StatusBar, StyleSheet, Pressable } from "react-native";

const Header = () => {
  return (
    <View style={style.header}>
      <Text style={style.headerText}>Welcome to React Native</Text>
    </View>
  );
};
const Content = () => {
  return (
    <View style={style.content}>
      <Text style={style.contenttex1}>This is a simple screen</Text>
      <Text style={style.contenttext2}>
        It demonstrates styling and core components.
      </Text>
    </View>
  );
};
const Button = ({ text }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        style.button,
        { backgroundColor: pressed ? "lightblue" : "blue" },
      ]}
      onPress={() => console.log("pressed")}
    >
      <Text>{text}</Text>
    </Pressable>
  );
};

const App = () => {
  return (
    <View>
      <StatusBar></StatusBar>
      <View style={style.main}>
        <Header />
        <Content />
        <Button text="Click" />
      </View>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  main: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  header: {
    flex: 1,
    backgroundColor: "rgba(0,0,255,0.5)",
  },
  headerText: {
    flex: 1,
    fontSize: 35,
    fontWeight: "bold",
  },
  content: {
    backgroundColor: "rgba(0,150,150,0.5)",
    padding: 10,
    flex: 1,
  },
  contenttex1: { fontSize: 25, color: "rgba(0,0,0,0.6)", textAlign: "center" },
  contenttext2: {
    fontSize: 20,
    color: "rgba(255,0,0,0.6)",
    textAlign: "center",
  },
  button: {
    backgroundColor: "lightblue",
  },
});
