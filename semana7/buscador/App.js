import React, { useMemo, useRef, useState, useCallback, use } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "./data/products";
import { ProductRow } from "./components/ProductRow";

export default function App() {
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const inputRef = useRef();
  const debounceRef = useRef();

  // Handlers estables
  const handleFocus = useCallback(() => inputRef.current?.focus(), []);
  const onChangeQuery = useCallback((text) => setQuery(text), []);
  const onChangeMinPrice = useCallback(
    (text) => setMinPrice(text.replace(/[^0-9.]/g, "")),
    [],
  );
  const clear = useCallback(() => {
    setQuery("");
    setMinPrice("");
    inputRef.current?.focus();
  }, []);

  // Calculo costoso memorizado (orden + filtro)
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const min = Number(minPrice) || 0;
    const sorted = [...products].sort((a, b) => a.name.localeCompare(b.name));

    return sorted.filter(
      (p) => (q === "" || p.name.toLowerCase().includes(q)) && p.price >= min,
    );
  }, [query, minPrice]);

  // Derivado memorizado (estadísticas rápidas)
  const stats = useMemo(() => {
    const total = filtered.length;
    const categories = new Set(filtered.map((p) => p.category)).size;

    return { total, categories };
  }, [filtered]);

  const renderItem = useCallback(({ item }) => <ProductRow item={item} />, []);
  const keyExtractor = useCallback((item) => item.id, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🔍 Buscador de Productos</Text>

      <View style={styles.controls}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Buscar por nombre..."
          value={query}
          onChangeText={onChangeQuery}
          returnKeyType="search"
        />
        <TextInput
          style={styles.input}
          placeholder="Precio mínimo (S/.)"
          keyboardType="numeric"
          value={minPrice}
          onChangeText={onChangeMinPrice}
        />
        <View style={styles.buttons}>
          <Pressable onPress={handleFocus} style={styles.btn}>
            <Text style={styles.btnText}>Foco</Text>
          </Pressable>
          <Pressable onPress={clear} style={styles.btnSecondary}>
            <Text style={styles.btnText}>Limpiar</Text>
          </Pressable>
        </View>
      </View>

      <Text style={styles.stats}>
        Resultados: {stats.total} productos en {stats.categories} categorías
      </Text>

      <FlatList
        data={filtered}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        initialNumToRender={20}
        windowSize={10}
        removeClippedSubviews
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
  },
  controls: {
    gap: 8,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  buttons: {
    flexDirection: "row",
    gap: 8,
  },

  btn: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  btnSecondary: {
    backgroundColor: "#6c757d",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
  },
  stats: {
    marginBottom: 8,
    fontStyle: "italic",
    color: "#555",
  },
});
