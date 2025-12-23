import { StyleSheet, Text, View } from "react-native";

export default function LibraryTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Library</Text>
      <Text style={styles.subtitle}>
        Your comfort fiction and saved reads will appear here.
      </Text>
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
  subtitle: { color: "#B3B3B3" },
});
