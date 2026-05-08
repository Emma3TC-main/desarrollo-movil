import React, { useState } from "react";
import { View, TextInput, FlatList, StyleSheet, Text } from "react-native";

const products = [
  { id: "1", name: "Laptop", price: 999 * 3.5 },
  { id: "2", name: "Smartphone", price: 499 * 3.5 },
  { id: "3", name: "Tablet", price: 299 * 3.5 },
  { id: "4", name: "Headphones", price: 199 * 3.5 },
  { id: "5", name: "Smartwatch", price: 199 * 3.5 },
];

export default function App() {
  const [minPrice, setMinPrice] = useState("");

  const filteredProducts = products.filter((p) =>
    minPrice ? p.price >= Number(minPrice) : true,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔍 Buscador de Productos por Precio</Text>
      <TextInput
        style={styles.input}
        placeholder="Precio mínimo..."
        value={minPrice}
        onChangeText={setMinPrice}
        keyboardType="numeric"
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.name} - S/. {item.price}
          </Text>
        )}
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
    marginBottom: 25,
  },
  item: {
    fontSize: 18,
    paddingVertical: 10,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
});
