import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ProductRow = React.memo(function ProductRow({ item }) {
  return (
    <View>
      <Text style={styles.row}>{item.name}</Text>
      <Text style={styles.name}>${item.price.toFixed(2)}</Text>
      <Text style={styles.meta}>{item.category}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  row: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
  },
  meta: {
    color: "gray",
  },
});
