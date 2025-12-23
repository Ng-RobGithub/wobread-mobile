import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const STORAGE_KEYS = {
  IS_LOGGED_IN: "wobread_is_logged_in",
};

export default function LoginScreen() {
  const handleLogin = async () => {
    await AsyncStorage.setItem(STORAGE_KEYS.IS_LOGGED_IN, "true");
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.subtitle}>
        Log in to continue your journey with Wobread.
      </Text>

      <Pressable style={styles.primaryButton} onPress={handleLogin}>
        <Text style={styles.primaryText}>Log in</Text>
      </Pressable>

      <Pressable onPress={() => router.replace("/(tabs)")}>
        <Text style={styles.skip}>Continue without login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24 },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 12,
  },
  subtitle: {
    color: "#B3B3B3",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: "#2ECC71",
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 16,
  },
  primaryText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
    color: "#000",
  },
  skip: { textAlign: "center", color: "#B3B3B3" },
});
