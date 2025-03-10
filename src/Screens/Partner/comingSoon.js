import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ComingSoon = () => {
  return (
    <View style={styles.container}>
        
      <Text style={styles.text}>Coming Soon...</Text>
    </View>
  );
};

export default ComingSoon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
});
