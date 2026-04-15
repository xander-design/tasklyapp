import { BlurredCollapsibleHeader } from "@/components/blurred-collapsible-header/BlurredCollapsibleHeader";
import ImageGallery from "@/features/image-gallery/components/image-gallery";
import { useTheme } from "@/features/theme/context/theme-provider";
import React, { useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

export default function WallpaperGallery() {
  const { activeTheme } = useTheme();
  const style = styles(activeTheme);
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={style.container}>
      <BlurredCollapsibleHeader title="Wallpaper" scrollY={scrollY} />

      <ImageGallery scrollY={scrollY} />
    </View>
  );
}

const styles = (activeTheme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: activeTheme.background.primary,
    },
  });
