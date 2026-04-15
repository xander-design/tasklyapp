import { useTheme } from "@/features/theme/context/theme-provider";
import { BlurView } from "expo-blur";
import React from "react";
import { Animated, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type BlurredCollapsibleHeaderProps = {
  title: string;
  scrollY: Animated.Value;
  subtitle?: string;
  showBorder?: boolean;
};

export function BlurredCollapsibleHeader({
  title,
  scrollY,
  subtitle,
  showBorder = false,
}: BlurredCollapsibleHeaderProps) {
  const { activeTheme, currentTheme } = useTheme();
  const style = styles(activeTheme, showBorder);
  const insets = useSafeAreaInsets();

  const animatedContainerHeight = scrollY.interpolate({
    inputRange: [0, 114],
    outputRange: [114, 55],
    extrapolate: "clamp",
  });

  const smallTitleBarOpacity = scrollY.interpolate({
    inputRange: [20, 80],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const smallTitleOpacity = scrollY.interpolate({
    inputRange: [70, 110],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const largeTitleOpacity = scrollY.interpolate({
    inputRange: [0, 70],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const largeTitleScale = scrollY.interpolate({
    inputRange: [0, 64],
    outputRange: [1, 0.72],
    extrapolate: "clamp",
  });

  const largeTitleTranslateY = scrollY.interpolate({
    inputRange: [0, 64],
    outputRange: [0, -6],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={[
        style.container,
        {
          paddingTop: insets.top,
          height: Animated.add(insets.top, animatedContainerHeight),
        },
      ]}
    >
      <BlurView
        intensity={30}
        tint={currentTheme === "dark" ? "dark" : "light"}
        style={StyleSheet.absoluteFill}
      />

      <Animated.View
        style={[style.smallTitleWrapper, { opacity: smallTitleBarOpacity }]}
      >
        <Animated.Text
          numberOfLines={1}
          style={[style.smallTitle, { opacity: smallTitleOpacity }]}
        >
          {title}
        </Animated.Text>
      </Animated.View>

      <Animated.View
        style={[
          style.largeTitleWrapper,
          {
            opacity: largeTitleOpacity,
            transform: [
              { scale: largeTitleScale },
              { translateY: largeTitleTranslateY },
            ],
          },
        ]}
      >
        <Text style={style.largeTitle}>{title}</Text>
        {subtitle && <Text style={style.largeTitleSubtitle}>{subtitle}</Text>}
      </Animated.View>
    </Animated.View>
  );
}

const styles = (activeTheme: any, showBorder: boolean) =>
  StyleSheet.create({
    container: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      zIndex: 20,
      overflow: "hidden",
      borderBottomWidth: showBorder ? StyleSheet.hairlineWidth : 0,
      borderColor: showBorder ? "#D0D0D0" : "transparent",
    },
    smallTitleWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: 44,
      paddingHorizontal: 14,
    },
    smallTitle: {
      flex: 1,
      textAlign: "center",
      marginHorizontal: 12,
      fontSize: 17,
      fontWeight: "600",
      color: activeTheme.text.primary,
    },
    largeTitleWrapper: {
      justifyContent: "flex-end",
      width: "100%",
      height: 58,
      marginTop: 12,
      paddingHorizontal: 20,
      paddingBottom: 8,
    },
    largeTitle: {
      color: activeTheme.text.primary,
      fontSize: 28,
      fontWeight: "600",
      letterSpacing: 0.2,
    },
    largeTitleSubtitle: {
      color: activeTheme.text.primary,
      fontSize: 14,
      fontWeight: "500",
      letterSpacing: 0.2,
    },
  });
