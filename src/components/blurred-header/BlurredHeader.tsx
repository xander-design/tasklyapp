import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function BlurredHeader() {
  return (
    <BlurView intensity={60} tint="light" style={StyleSheet.absoluteFill}>
      <View style={styles.blurredOverlay} />
    </BlurView>
  );
}

const styles = StyleSheet.create({
  blurredOverlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
});
