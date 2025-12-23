import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const STORAGE_KEYS = {
  IS_LOGGED_IN: "wobread_is_logged_in",
  // keep onboardingComplete so user doesn't see onboarding again after logout
  ONBOARDING_COMPLETE: "wobread_onboarding_complete",
  USER_PREFERENCES: "wobread_user_preferences",
};

export default function ProfileTab() {
  const logout = async () => {
    await AsyncStorage.removeItem(STORAGE_KEYS.IS_LOGGED_IN);
    router.replace("/auth/login");
  };

  const resetAll = async () => {
    await AsyncStorage.multiRemove([
      STORAGE_KEYS.IS_LOGGED_IN,
      STORAGE_KEYS.ONBOARDING_COMPLETE,
      STORAGE_KEYS.USER_PREFERENCES,
    ]);
    router.replace("/onboarding/welcome");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.subtitle}>Manage your session and preferences.</Text>

      <Pressable style={styles.primaryButton} onPress={logout}>
        <Text style={styles.primaryText}>Logout</Text>
      </Pressable>

      <Pressable style={styles.secondaryButton} onPress={resetAll}>
        <Text style={styles.secondaryText}>Reset onboarding + preferences</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E0F12",
    padding: 24,
    paddingTop: 64,
  },
  title: { color: "#FFFFFF", fontSize: 24, fontWeight: "600", marginBottom: 8 },
  subtitle: { color: "#B3B3B3", marginBottom: 24 },

  primaryButton: {
    backgroundColor: "#2ECC71",
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  primaryText: { textAlign: "center", fontWeight: "600", color: "#000" },

  secondaryButton: {
    borderWidth: 1,
    borderColor: "#22252B",
    paddingVertical: 14,
    borderRadius: 10,
  },
  secondaryText: { textAlign: "center", color: "#B3B3B3" },
});
