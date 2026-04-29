import { useTheme } from "@/features/theme/context/theme-provider";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

type BlurOverlayProps = {
  intensity?: number;
};

export default function BlurOverlay(prop: BlurOverlayProps) {
  const { intensity = 20 } = prop;
  const { activeTheme, currentTheme } = useTheme();
  const style = styles(activeTheme);

  return (
    <BlurView
      intensity={intensity}
      tint={currentTheme === "dark" ? "dark" : "light"}
      style={style.blurOverlay}
    />
  );
}

const styles = (activeTheme: any) =>
  StyleSheet.create({
    blurOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: activeTheme.blur,
    },
  });
