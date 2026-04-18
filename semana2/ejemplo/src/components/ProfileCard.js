import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileCard() {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Juan Pérez</Text>
      <Text style={styles.job}>
        Desarrollador de software apasionado por React Native y el desarrollo
        móvil.
      </Text>
      <Text style={styles.description}>
        Me encanta crear aplicaciones móviles que sean intuitivas, rápidas y que
        brinden una excelente experiencia de usuario. Siempre estoy buscando
        aprender nuevas tecnologías y mejorar mis habilidades como
        desarrollador.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 24,
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },

  avatar: {
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold"
  },
  job: {
    fontSize: 16,
    color: "#777",
  },
  description: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginTop: 8,
  }
});


