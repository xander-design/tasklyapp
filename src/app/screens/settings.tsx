import ThemeView from "@/components/theme-view/theme-view";
import ImageSettings from "@/features/image-gallery/components/image-settings";
import { ThemeSettings } from "@/features/theme/components/theme-settings";
import { useTheme } from "@/features/theme/context/theme-provider";
import { useRef } from "react";
import { Animated, StyleSheet } from "react-native";

export default function SettingsScreen() {
  const { activeTheme } = useTheme();
  const style = styles(activeTheme);
  const { currentTheme, setCurrentTheme } = useTheme();
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleThemeChange = async (selectedTheme: string) => {
    setCurrentTheme(selectedTheme);
  };

  return (
    <ThemeView scrollY={scrollY} title="Settings" showLargeTitle={true}>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        contentContainerStyle={style.containerStyle}
      >
        <ThemeSettings
          currentTheme={currentTheme}
          onThemeSelected={(selectedTheme) => handleThemeChange(selectedTheme)}
        />

        <ImageSettings />
      </Animated.ScrollView>
    </ThemeView>
  );
}

const styles = (activeTheme: any) =>
  StyleSheet.create({
    containerStyle: {
      paddingTop: 170,
      paddingHorizontal: 16,
      paddingBottom: 32,
    },
  });
