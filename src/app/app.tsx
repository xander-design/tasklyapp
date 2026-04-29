import { useTheme } from "@/features/theme/context/theme-provider";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function App() {
  const { activeTheme } = useTheme();
  const style = styles(activeTheme);

  return (
    <>
      <StatusBar style="auto" />
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
              <View style={style.container}>
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
            headerShown: true,
            presentation: "formSheet",
            gestureEnabled: true,
            sheetGrabberVisible: false,
            contentStyle: {
              justifyContent: "flex-start",
              minHeight: "100%",
              paddingVertical: 20,
              paddingHorizontal: 20,
              backgroundColor: activeTheme.background.primary,
            },
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

const styles = (activeTheme: any) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      paddingHorizontal: 8,
    },
  });
