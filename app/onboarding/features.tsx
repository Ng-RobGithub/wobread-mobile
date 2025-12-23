import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function FeaturesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What you’ll find inside</Text>

      <Text style={styles.item}>• Comfort fiction for quiet moments</Text>
      <Text style={styles.item}>• Affirmations for emotional balance</Text>
      <Text style={styles.item}>• Supportive community</Text>
      <Text style={styles.item}>• Trusted pregnancy tips</Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => router.push("/onboarding/personalize")}
      >
        <Text style={styles.primaryText}>Continue</Text>
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
    marginBottom: 24,
  },
  item: {
    color: "#B3B3B3",
    fontSize: 16,
    marginBottom: 12,
  },
  primaryButton: {
    marginTop: 32,
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
