import { useTheme } from "@/features/theme/context/theme-provider";
import { StyleSheet, Text, View } from "react-native";

export default function TabTwoScreen() {
  const { activeTheme } = useTheme();
  // @ts-ignore
  const style = styles(activeTheme);

  return (
    <View style={style.container}>
      <Text style={style.text}>Calendar</Text>
    </View>
  );
}

const styles = (activeTheme: any, theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: activeTheme.background.primary,
    },
    text: {
      color: activeTheme.text.primary,
    },
  });
