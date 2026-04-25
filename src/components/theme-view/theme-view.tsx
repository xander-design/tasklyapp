import { BlurredHeader } from "@/components/blurred-header/blurred-header";
import { useImageGallery } from "@/features/image-gallery/context/image-provider";
import { useTheme } from "@/features/theme/context/theme-provider";
import { BlurView } from "expo-blur";
import { ReactNode } from "react";
import {
  Animated,
  ImageBackground,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

type ThemeViewProps = {
  children: ReactNode;
  scrollY: Animated.Value;
  showWallpaper?: boolean;
  showLargeTitle?: boolean;
  isScrollable?: boolean;
  hasBottomBlur?: boolean;
  title?: string;
};

function ThemeView(props: ThemeViewProps) {
  const {
    children,
    scrollY,
    showWallpaper = false,
    showLargeTitle = false,
    isScrollable = false,
    hasBottomBlur = false,
    title = "",
  } = props;
  const { activeTheme, currentTheme } = useTheme();
  const { selectedImage } = useImageGallery();
  const style = styles(activeTheme);

  const bottomBlur = () => {
    return (
      <BlurView
        intensity={30}
        tint={currentTheme === "dark" ? "dark" : "light"}
        style={[StyleSheet.absoluteFill, style.bottomBlur]}
      />
    );
  };

  const isScrollableView = (children: ReactNode) => {
    return (
      <ScrollView
        contentContainerStyle={style.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    );
  };

  const renderImageView = () => {
    return (
      <ImageBackground
        source={selectedImage as ImageSourcePropType}
        style={style.container}
      >
        {children}
      </ImageBackground>
    );
  };

  return (
    <View style={style.container}>
      <BlurredHeader
        title={title}
        scrollY={scrollY}
        showLargeTitle={showLargeTitle}
      />
      {showWallpaper
        ? renderImageView()
        : isScrollable
          ? isScrollableView(children)
          : children}
      {hasBottomBlur && bottomBlur()}
    </View>
  );
}

export default ThemeView;

const styles = (activeTheme: any) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      flex: 1,
      backgroundColor: activeTheme.background.primary,
    },
    text: {
      color: activeTheme.text.primary,
    },
    scrollViewContainer: {
      paddingTop: 100,
    },
    bottomBlur: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 30,
    },
  });
