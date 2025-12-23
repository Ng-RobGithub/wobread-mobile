import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const OPTIONS = ["Comfort", "Information", "Emotional support", "Community"];

export default function PersonalizeScreen() {
  const selectOption = async (value: string) => {
    await AsyncStorage.setItem(
      "wobread_user_preferences",
      JSON.stringify({ focus: value })
    );
    router.push("/onboarding/get-started");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What are you looking for most?</Text>

      {OPTIONS.map((option) => (
        <Pressable
          key={option}
          style={styles.option}
          onPress={() => selectOption(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </Pressable>
      ))}

      <Pressable onPress={() => router.push("/onboarding/get-started")}>
        <Text style={styles.skip}>Skip for now</Text>
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
    fontSize: 24,
    marginBottom: 24,
  },
  option: {
    borderWidth: 1,
    borderColor: "#B3B3B3",
    borderRadius: 10,
    paddingVertical: 14,
    marginBottom: 12,
  },
  optionText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
  },
  skip: {
    marginTop: 20,
    textAlign: "center",
    color: "#B3B3B3",
  },
});
