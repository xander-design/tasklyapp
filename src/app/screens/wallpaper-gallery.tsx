import ThemeView from "@/components/theme-view/theme-view";
import ImageGallery from "@/features/image-gallery/components/image-gallery";
import React, { useRef } from "react";
import { Animated } from "react-native";

export default function WallpaperGallery() {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <ThemeView scrollY={scrollY} title="Wallpaper" showLargeTitle={true}>
      <ImageGallery scrollY={scrollY} />
    </ThemeView>
  );
}
