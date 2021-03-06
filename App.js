import React from "react";
import { StyleSheet, View } from "react-native";
import { RootRouter } from "./src/router/router";

export default function App() {
  return <RootRouter />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
