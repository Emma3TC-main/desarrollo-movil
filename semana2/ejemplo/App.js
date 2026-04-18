import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import LoginScreen from "./src/components/LoginScreen";
import ProfileCard from "./src/components/ProfileCard";
import ProductCatalog from "./src/components/ProductoCatalog";

export default function App() {
  const [screen, setScreen] = useState("login");

  const renderScreen = () => {
    switch (screen) {
      case "profile":
        return <ProfileCard />;
      case "catalog":
        return <ProductCatalog />;
      default:
        return <LoginScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button title="Login" onPress={() => setScreen("login")} />
        </View>

        <View style={styles.buttonWrapper}>
          <Button title="Profile" onPress={() => setScreen("profile")} />
        </View>

        <View style={styles.buttonWrapper}>
          <Button title="Catalog" onPress={() => setScreen("catalog")} />
        </View>
      </View>

      <View style={styles.content}>{renderScreen()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    paddingTop: 40,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: "#ffffff",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },

  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 8,
    overflow: "hidden", 
  },

  content: {
    flex: 1,
    padding: 10,
  },
});