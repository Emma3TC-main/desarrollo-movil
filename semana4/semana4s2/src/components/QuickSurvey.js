import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function QuickSurvey() {
  const [respuesta, setRespuesta] = useState(null);

  const respuestaElegida = (valor) => {
    setRespuesta(valor);
  };

  const Reset = () => {
    setRespuesta(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Te gusta React Native?</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => respuestaElegida("Sí")}
        >
          <Text style={styles.buttonText}>Sí</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => respuestaElegida("No")}
        >
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>

      {respuesta && <Text style={styles.result}>Elegiste: {respuesta}</Text>}

      <TouchableOpacity
        style={[styles.button, styles.resetButton]}
        onPress={Reset}
      >
        <Text style={styles.buttonText}>Resetear</Text>
      </TouchableOpacity>
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
