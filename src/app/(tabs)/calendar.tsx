import {StyleSheet, Text, View} from "react-native";
import { useTheme } from "@/context/theme/theme-provider";

export default function TabTwoScreen() {
  const { activeTheme } = useTheme();
  // @ts-ignore
  const style = styles(activeTheme);

  return (
    <View style={ style.container } >
      <Text style={ style.text }>Calendar</Text>
    </View>
  );
}

const styles = (activeTheme: any, theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: activeTheme.background.primary
    },
    text: {
      color: activeTheme.text.primary
    },
  });