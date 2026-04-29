import Card from "@/components/card/Card";
import ThemeView from "@/components/theme-view/theme-view";
// import { clearAllSettings } from "@/features/database/db";
import { useImageGallery } from "@/features/image-gallery/context/image-provider";
import { useTheme } from "@/features/theme/context/theme-provider";
import { useRef } from "react";
import { Animated, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  const { activeTheme, currentTheme } = useTheme();
  const { selectedImage } = useImageGallery();
  const style = styles(activeTheme);
  const scrollY = useRef(new Animated.Value(0)).current;

  // async function clearAllData() {
  //   await clearAllSettings();
  // }
  // clearAllData();

  return (
    <ThemeView scrollY={scrollY} showWallpaper>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        contentContainerStyle={style.containerStyle}
      >
        <Card stylesList={{ marginBottom: 40 }}>
          <Text style={style.text}>This is a card</Text>
        </Card>

        <Card stylesList={{ marginBottom: 40 }}>
          <Text style={style.text}>
            Selected Theme: {currentTheme || "Not set"}
          </Text>
          <Text style={style.text}>
            Selected Wallpaper: {selectedImage || "Not set"}
          </Text>
        </Card>
        <Card stylesList={{ marginBottom: 40 }}>
          <Text style={style.text}>This is a card</Text>
        </Card>
        <Card stylesList={{ marginBottom: 40 }}>
          <Text style={style.text}>This is a card</Text>
        </Card>
        <Card stylesList={{ marginBottom: 40 }}>
          <Text style={style.text}>This is a card</Text>
        </Card>
        <Card stylesList={{ marginBottom: 40 }}>
          <Text style={style.text}>This is a card</Text>
        </Card>
        <Card stylesList={{ marginBottom: 40 }}>
          <Text style={style.text}>This is a card</Text>
        </Card>
      </Animated.ScrollView>
    </ThemeView>
  );
}

const styles = (activeTheme: any) => {
  return StyleSheet.create({
    text: {
      color: activeTheme.text.primary,
    },
    containerStyle: {
      paddingTop: 170,
      paddingHorizontal: 16,
      paddingBottom: 32,
    },
  });
};
