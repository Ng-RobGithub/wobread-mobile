import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

const STORAGE_KEYS = {
  ONBOARDING_COMPLETE: "wobread_onboarding_complete",
  IS_LOGGED_IN: "wobread_is_logged_in",
};

export default function Index() {
  useEffect(() => {
    const bootstrap = async () => {
      const onboarded = await AsyncStorage.getItem(
        STORAGE_KEYS.ONBOARDING_COMPLETE
      );
      const loggedIn = await AsyncStorage.getItem(STORAGE_KEYS.IS_LOGGED_IN);

      if (!onboarded) {
        router.replace("/onboarding/welcome");
        return;
      }

      if (!loggedIn) {
        router.replace("/auth/login");
        return;
      }

      router.replace("/(tabs)");
    };

    bootstrap();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0E0F12",
      }}
    >
      <ActivityIndicator />
    </View>
  );
}
