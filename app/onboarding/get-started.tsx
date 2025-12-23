import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const STORAGE_KEYS = {
  ONBOARDING_COMPLETE: "wobread_onboarding_complete",
};

export default function GetStartedScreen() {
  const finishOnboarding = async () => {
    await AsyncStorage.setItem(STORAGE_KEYS.ONBOARDING_COMPLETE, "true");
    router.replace("/auth/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You’re not alone</Text>
      <Text style={styles.subtitle}>
        Wobread is here to support you — one moment at a time.
      </Text>

      <Pressable style={styles.primaryButton} onPress={finishOnboarding}>
        <Text style={styles.primaryText}>Get started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    marginBottom: 12,
  },
  subtitle: {
    color: "#B3B3B3",
    fontSize: 16,
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: "#2ECC71",
    paddingVertical: 14,
    borderRadius: 10,
  },
  primaryText: {
    textAlign: "center",
    fontWeight: "600",
    color: "#000",
  },
});
