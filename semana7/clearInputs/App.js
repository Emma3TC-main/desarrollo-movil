import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export default function App() {
  const [text, setText] = useState("");

  const clearInputs = () => {
    setText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe algo..."
        value={text}
        onChangeText={setText}
      />
      <Button title="Limpiar" onPress={clearInputs} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 25,
  },
});
