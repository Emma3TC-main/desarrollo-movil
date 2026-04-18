import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function DoubleNumber() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const calculateDouble = () => {
    if (!number) {
      Alert.alert("Error", "Por favor ingrese un número");
      return;
    }

    const double = parseFloat(number) * 2;
    setResult(double);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de dobles</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresa un número"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />

      <TouchableOpacity style={styles.button} onPress={calculateDouble}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {result !== "" && <Text style={styles.result}>Resultado: {result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },

  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
  },
});
