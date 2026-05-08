import React, { useState } from "react";
import { View, TextInput, FlatList, StyleSheet, Text } from "react-native";

const products = [
  { id: "1", name: "Laptop" },
  { id: "2", name: "Smartphone" },
  { id: "3", name: "Tablet" },
  { id: "4", name: "Headphones" },
  { id: "5", name: "Smartwatch" },
];

export default function App() {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔍 Buscador de Productos</Text>
      <TextInput
        style={styles.input}
        placeholder="Buscar producto..."
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
    paddingVertical: 10,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
});
