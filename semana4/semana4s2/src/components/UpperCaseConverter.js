import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function UpperCaseConverter() {
  const [texto, setTexto] = useState("");

  return (
    <View style={StyleSheet.container}>
      <Text style={styles.title}>Conversor a Mayúsculas</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe algo..."
        value={texto}
        onChangeText={(value) => setTexto(value)}
      />

      <Text style={styles.result}>{texto.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 15,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  result: {
    fontSize: 18,
    marginTop: 10,
    color: "blue",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  resetButton: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
