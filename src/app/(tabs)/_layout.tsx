import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {useTheme} from "@/context/theme/theme-provider";

export default function TabLayout() {
  const {activeTheme} = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: activeTheme.background.primary,
          borderColor: activeTheme.background.primary,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tasks",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="rectangle-list" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-outline" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
