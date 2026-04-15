import { BlurredCollapsibleHeader } from "@/components/blurred-collapsible-header/BlurredCollapsibleHeader";
import ImageSettings from "@/features/image-gallery/components/image-settings";
import { ThemeSettings } from "@/features/theme/components/theme-settings";
import { useTheme } from "@/features/theme/context/theme-provider";
import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

export default function SettingsScreen() {
  const { activeTheme } = useTheme();
  const style = styles(activeTheme);
  const { currentTheme, setCurrentTheme } = useTheme();
  const navigation = useNavigation<any>();
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={style.container}>
      <BlurredCollapsibleHeader title="Settings" scrollY={scrollY} />

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
          onThemeSelected={(selectedTheme) => setCurrentTheme(selectedTheme)}
        />

        <ImageSettings
          onImageSelected={(selectedImage) =>
            navigation.navigate(selectedImage)
          }
        />
      </Animated.ScrollView>
    </View>
  );
}

const styles = (activeTheme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: activeTheme.background.primary,
    },
    text: {
      color: activeTheme.text.primary,
    },
    containerStyle: {
      paddingTop: 170,
      paddingHorizontal: 16,
      paddingBottom: 32,
    },
  });
