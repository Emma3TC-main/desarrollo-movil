import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Product({ name, price, imageUri }) {
  const expensive = price > 100;

  return (
    <View style={styles.product}>
      <Image source={{ uri: imageUri }} style={styles.productImg} />
      <Text style={styles.productName}>{name}</Text>
      <Text style={[styles.productPrice, expensive && { color: "red" }]}>
        ${price.toFixed(2)}
      </Text>
    </View>
  );
}

export default function ProductCatalog() {
  return (
    <View style={styles.container}>
      <Product
        name="Producto 1"
        price={49.99}
        imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7yaX2GXkfyEvDNErxA9qQwnR_JZzALM5ew&s"
      />
      <Product
        name="Producto 2"
        price={149.99}
        imageUri="https://hiraoka.com.pe/media/mageplaza/blog/post/l/o/logitech-mejores_accesorios_de_computo_y_gaming.jpg"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 26,
    backgroundColor: "#f4f6f8",
  },

  product: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    width: 140,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  productImg: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  name: { fontSize: 16, fontWeight: "bold" },
  price: { fontSize: 14, color: "green" },
});
