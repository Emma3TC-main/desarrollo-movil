import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TrafficLight() {
  const [color, setColor] = useState("red");

  const getMessage = () => {
    if (color === "green") return "¡Avanza!";
    if (color === "red") return "¡Detente!";
    return "¡Precaución!";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Semáforo</Text>

      <View style={[styles.circle, { backgroundColor: color }]} />

      <Text style={styles.message}>{getMessage()}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btnRed} onPress={() => setColor("red")}>
          <Text style={styles.Text}>Rojo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnYellow}
          onPress={() => setColor("yellow")}
        >
          <Text style={styles.Text}>Amarillo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnGreen}
          onPress={() => setColor("green")}
        >
          <Text style={styles.Text}>Verde</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },

  message: {
    fontSize: 18,
    marginBottom: 20,
  },

  buttons: {
    flexDirection: "row",
    gap: 10,
  },

  btnRed: {
    backgroundColor: "red",
    padding: 10,
  },

  btnYellow: {
    backgroundColor: "orange",
    padding: 10,
  },

  btnGreen: {
    backgroundColor: "green",
    padding: 10,
  },

  text: {
    color: "#fff",
  },
});
