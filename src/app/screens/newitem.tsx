import { useTheme } from "@/features/theme/context/theme-provider";
import { StyleSheet, Text, View } from "react-native";

export default function NewItemScreen() {
  const { activeTheme } = useTheme();
  // @ts-ignore
  const style = styles(activeTheme);

  return (
    <View style={style.container}>
      <Text style={style.text}>New Item</Text>
    </View>
  );
}

const styles = (activeTheme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: activeTheme.background.primary,
    },
    text: {
      color: activeTheme.text.primary,
      fontSize: 18,
    },
  });
