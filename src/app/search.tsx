import { useTheme } from "@/features/theme/context/theme-provider";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function SearchScreen() {
  const { activeTheme } = useTheme();
  // @ts-ignore
  const style = styles(activeTheme);

  return (
    <View style={style.container}>
      <Text style={style.text}>Search</Text>
      <Link href="/" dismissTo style={style.link}>
        <Text>Go to home screen</Text>
      </Link>
    </View>
  );
}

const styles = (activeTheme: any, theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: activeTheme.background.secondary,
    },
    text: {
      color: activeTheme.text.primary,
    },
    link: {
      marginTop: 15,
      paddingVertical: 15,
      color: activeTheme.text.primary,
    },
  });
