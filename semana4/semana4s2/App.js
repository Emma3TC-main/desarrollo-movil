import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import DoubleNumber from "./src/components/DoubleNumber.js";
import { QuickSurvey } from "./src/components/QuickSurvey.js";
import TrafficLight from "./src/components/Semaforo.js";
import UpperCaseConverter from "./src/components/UpperCaseConverter.js";

export default function App() {
  const [vista, setVista] = useState("double");

  const renderVista = () => {
    switch (vista) {
      case "double":
        return <DoubleNumber />;
      case "survey":
        return <QuickSurvey />;
      case "traffic":
        return <TrafficLight />;
      case "upper":
        return <UpperCaseConverter />;
      default:
        return <DoubleNumber />;
    }
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => setVista("double")}>
          <Text style={styles.menuText}>Doble</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => setVista("survey")}>
          <Text style={styles.menuText}>Encuesta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => setVista("traffic")}>
          <Text style={styles.menuText}>Semáforo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => setVista("upper")}>
          <Text style={styles.menuText}>Mayúsculas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {renderVista()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef1f5",
  },

  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    width: "100%",
    paddingTop: 18,        // 🔥 espacio superior interno (no margin)
    paddingBottom: 14,
    paddingHorizontal: 10,

    backgroundColor: "#1e1e2f",

    borderBottomWidth: 1,
    borderBottomColor: "#2c2c3e",

    elevation: 4,
  },

  menuItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 18,   
    borderRadius: 8,
  },

  menuText: {
    color: "#eaeaf0",
    fontSize: 13,
    fontWeight: "600",
  },

  content: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 15,
  },
});