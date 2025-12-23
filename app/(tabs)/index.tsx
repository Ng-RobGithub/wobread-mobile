import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

type Preferences = { focus?: string } | null;

const STORAGE_KEYS = {
  USER_PREFERENCES: "wobread_user_preferences",
};

export default function HomeTab() {
  const [prefs, setPrefs] = useState<Preferences>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEYS.USER_PREFERENCES);
        if (!raw) return setPrefs(null);

        try {
          setPrefs(JSON.parse(raw));
        } catch {
          // If web storage got corrupted, reset it safely
          await AsyncStorage.removeItem(STORAGE_KEYS.USER_PREFERENCES);
          setPrefs(null);
        }
      } catch {
        setPrefs(null);
      }
    };

    load();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wobread</Text>
      <Text style={styles.subtitle}>
        {prefs?.focus
          ? `Your focus: ${prefs.focus}`
          : "Pick a focus in onboarding (optional)."}
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today’s gentle start</Text>
        <Text style={styles.cardText}>
          A calm moment for you. Explore comfort fiction, affirmations, and tips
          at your own pace.
        </Text>
      </View>
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
  title: { color: "#FFFFFF", fontSize: 28, fontWeight: "600", marginBottom: 8 },
  subtitle: { color: "#B3B3B3", fontSize: 14, marginBottom: 24 },
  card: {
    borderWidth: 1,
    borderColor: "#22252B",
    borderRadius: 12,
    padding: 16,
    backgroundColor: "#111319",
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  cardText: { color: "#B3B3B3", lineHeight: 20 },
});
