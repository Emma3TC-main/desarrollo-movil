import { useState } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

export default function App() {
  const [pantalla, setPantalla] = useState(1);

  return (
    <View style={styles.root}>
      {/* PANTALLA 1 */}
      {pantalla === 1 && (
        <View style={styles.container}>
          <View style={styles.card}>
            <Image
              source={{
                uri: "data:image/jpeg;base64,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",
              }}
              style={styles.image}
            />
            <Text style={styles.titulo}>Torres Centeno, Emmanuel Misael</Text>
            <Text style={styles.descripcion}>Ingeniero de Software, 2026</Text>
            <Text style={styles.descripcion}>
              Desarrollo móvil, Arquitectura de sistemas, BI, Data Science
            </Text>
          </View>
        </View>
      )}

      {/* PANTALLA 2 */}
      {pantalla === 2 && (
        <View style={styles.container}>
          <View style={styles.profile}>
            <Image
              source={{
                uri: "data:image/jpeg;base64,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",
              }}
              style={styles.image}
            />
            <Text style={styles.titulo}>Torres Centeno, Emmanuel Misael</Text>
          </View>

          <View style={styles.personalInfo}>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Bio</Text>
              <Text style={styles.value}>Hey there, I'm on Atlantik</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.label}>Age</Text>
              <Text style={styles.value}>22 years</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.label}>Gender</Text>
              <Text style={styles.value}>Male</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.label}>Joined</Text>
              <Text style={styles.value}>March 04, 2025</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.label}>Location</Text>
              <Text style={styles.value}>Lima, Perú</Text>
            </View>
          </View>
        </View>
      )}

      {/* MENÚ (AHORA ABAJO) */}
      <View style={styles.menu}>
        <Button
          title="Tarjeta de presentación"
          onPress={() => setPantalla(1)}
        />
        <Button title="Perfil personal" onPress={() => setPantalla(2)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  menu: {
    position: "absolute",
    bottom: 80,
    left: 20,
    right: 20,

    flexDirection: "column",
    gap: 10,

    padding: 15,

    backgroundColor: "#1f2937",
    borderRadius: 15,

    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: -2 },
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eef2f7",
    paddingHorizontal: 20,
    paddingBottom: 140,
  },

  card: {
    width: "100%",
    maxWidth: 320,
    backgroundColor: "#ffffff",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },

  profile: {
    alignItems: "center",
    marginBottom: 20,
  },

  personalInfo: {
    width: "100%",
    maxWidth: 350,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 15,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
    paddingVertical: 8,
  },

  label: {
    fontSize: 14,
    color: "#374151",
    fontWeight: "600",
  },

  value: {
    fontSize: 14,
    color: "#6b7280",
  },

  image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 15,
  },

  titulo: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1f2937",
    textAlign: "center",
    marginBottom: 6,
  },

  descripcion: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    lineHeight: 20,
    marginTop: 4,
  },
});
