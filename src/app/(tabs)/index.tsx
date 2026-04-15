import { BlurredCollapsibleHeader } from "@/components/blurred-collapsible-header/BlurredCollapsibleHeader";
import Card from "@/components/card/Card";
import { useTheme } from "@/features/theme/context/theme-provider";
import { useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const { activeTheme } = useTheme();
  const style = styles(activeTheme);
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={style.container}>
      <BlurredCollapsibleHeader title="" scrollY={scrollY} />

      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        contentContainerStyle={style.containerStyle}
      >
        <Card>
          <Text style={style.text}>This is a card</Text>
        </Card>
      </Animated.ScrollView>
    </View>
  );
}

const styles = (activeTheme: any) => {
  return StyleSheet.create({
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
};
