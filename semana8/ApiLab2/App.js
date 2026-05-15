import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data.slice(0, 10)))
      .catch((err) => {
        console.error(err);
        setError("Error al cargar los posts");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📌 Posts desde API</Text>
      <Text style={styles.subtitle}>
        Lista de publicaciones obtenidas desde JSONPlaceholder
      </Text>

      {error && <Text style={styles.error}>{error}</Text>}

      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#4F46E5" />
          <Text style={styles.loadingText}>Cargando datos...</Text>
        </View>
      ) : (
        <FlatList
          data={posts}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.postId}>#{item.id}</Text>
              </View>

              <Text style={styles.postTitle}>{item.title}</Text>

              <Text style={styles.postBody}>{item.body}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 20,
  },

  error: {
    backgroundColor: "#FEE2E2",
    color: "#DC2626",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    fontWeight: "600",
  },

  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    marginTop: 10,
    color: "#4B5563",
    fontSize: 16,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 16,
    marginBottom: 14,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4.65,

    elevation: 4,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  postId: {
    backgroundColor: "#EEF2FF",
    color: "#4338CA",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: "bold",
  },

  postTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
    textTransform: "capitalize",
  },

  postBody: {
    fontSize: 15,
    lineHeight: 22,
    color: "#4B5563",
  },
});
