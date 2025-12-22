import { StyleSheet, Text, View } from "react-native";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wobread</Text>
      <Text style={styles.subtitle}>
        Comfort fiction for a mindful pregnancy journey
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E0F12",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "600",
  },
  subtitle: {
    color: "#B3B3B3",
    marginTop: 8,
  },
});
