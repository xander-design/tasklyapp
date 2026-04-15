import { useTheme } from "@/features/theme/context/theme-provider";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Appearance, StyleSheet, TouchableOpacity, View } from "react-native";

export default function App() {
  const { currentTheme, activeTheme } = useTheme();

  const statusBarTheme = () => {
    if (currentTheme === "dark" || Appearance.getColorScheme() === "dark") {
      return "light";
    }

    return "dark";
  };

  return (
    <>
      <StatusBar style={statusBarTheme()} />
      <Stack
        screenOptions={{
          headerTitle: "",
          headerShown: true,
          headerTransparent: true,
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerRight: () => (
              <View style={styles.container}>
                <TouchableOpacity onPress={() => router.navigate("./search")}>
                  <Ionicons
                    name="search-outline"
                    size={30}
                    color={activeTheme.text.primary}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ paddingHorizontal: 20 }}
                  onPress={() => router.navigate("./screens/newitem")}
                >
                  <MaterialIcons
                    name="format-list-bulleted-add"
                    size={30}
                    color={activeTheme.text.primary}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => router.navigate("./screens/settings")}
                >
                  <Ionicons
                    name="settings-outline"
                    size={30}
                    color={activeTheme.text.primary}
                  />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="search"
          options={{
            title: "Search",
            headerShown: false,
            presentation: "formSheet",
            gestureEnabled: true,
            sheetGrabberVisible: false,
            contentStyle: { backgroundColor: activeTheme.background.secondary },
            sheetAllowedDetents: [0.25],
            sheetInitialDetentIndex: 0,
            sheetLargestUndimmedDetentIndex: 0,
          }}
        />
        <Stack.Screen
          name="screens/newitem"
          options={{
            presentation: "modal",
            headerTitle: "New Item",
            headerTitleStyle: {
              color: activeTheme.text.primary,
            },
            headerStyle: {
              backgroundColor: activeTheme.background.secondary,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.navigate("../")}
                style={{ paddingHorizontal: 3 }}
              >
                <Ionicons
                  name="close"
                  size={30}
                  color={activeTheme.text.primary}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => router.navigate("../")}
                style={{ paddingHorizontal: 3 }}
              >
                <Ionicons
                  name="checkmark"
                  size={30}
                  color={activeTheme.text.primary}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="screens/settings"
          options={{
            title: "Settings",
          }}
        />
        <Stack.Screen
          name="screens/wallpaper-gallery"
          options={{
            title: "Wallpaper",
          }}
        />
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 8,
  },
});
