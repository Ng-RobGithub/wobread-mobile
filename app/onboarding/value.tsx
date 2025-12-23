import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const STORAGE_KEYS = {
  ONBOARDING_COMPLETE: "wobread_onboarding_complete",
};

export default function ValueScreen() {
  const skipOnboarding = async () => {
    await AsyncStorage.setItem(STORAGE_KEYS.ONBOARDING_COMPLETE, "true");
    router.replace("/auth/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comfort for every mood</Text>
      <Text style={styles.text}>
        Gentle stories, affirmations, and guidance designed to help you feel
        supported and at ease.
      </Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => router.push("/onboarding/features")}
      >
        <Text style={styles.primaryText}>Next</Text>
      </Pressable>

      <Pressable onPress={skipOnboarding}>
        <Text style={styles.skip}>Skip</Text>
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
    fontSize: 26,
    marginBottom: 16,
  },
  text: {
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
    color: "#000",
  },
  skip: {
    textAlign: "center",
    color: "#B3B3B3",
  },
});
