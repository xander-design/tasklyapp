import { useTheme } from "@/features/theme/context/theme-provider";
import { BlurView } from "expo-blur";
import React, { ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

type ThemedContainerType = {
  children: ReactNode;
  isScrollable?: boolean;
  hasBottomBlur?: boolean;
};

function ThemedContainer(props: ThemedContainerType) {
  const { children, isScrollable = false, hasBottomBlur = false } = props;
  const { activeTheme } = useTheme();
  // const insets = useSafeAreaInsets();
  // @ts-ignore
  const style = styles(activeTheme);

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

  const bottomBlur = () => {
    return <BlurView intensity={60} tint="light" style={style.bottomBlur} />;
  };

  const basicView = (children: ReactNode) => {
    return <View style={style.basicContainer}>{children}</View>;
  };

  const renderDefaultView = () => {
    return (
      <View style={style.container}>
        {isScrollable ? isScrollableView(children) : basicView(children)}
        {hasBottomBlur && bottomBlur()}
      </View>
    );
  };

  return renderDefaultView();
}

export default ThemedContainer;

const styles = (activeTheme: any, isScrollable: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 15,
      paddingTop: 0,
      backgroundColor: activeTheme.background.primary,
    },
    basicContainer: {
      paddingTop: 100,
      backgroundColor: "transparent",
    },
    bottomBlur: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 30,
    },
    scrollViewContainer: {
      paddingTop: 100,
    },
  });
