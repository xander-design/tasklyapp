import { useTheme } from "@/features/theme/context/theme-provider";
import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

type ActionGroupProps = {
  children: ReactNode;
  title?: string;
};

export default function ActionGroup(props: ActionGroupProps) {
  const { children, title = "" } = props;
  const { activeTheme } = useTheme();
  const style = styles(activeTheme);

  const groupHeader = (title: string) => {
    return <Text style={style.groupTitle}>{title}</Text>;
  };

  const groupContent = (children: ReactNode) => {
    return <View style={style.groupContent}>{children}</View>;
  };

  return (
    <View style={style.groupWrapper}>
      {title && groupHeader(title)}
      {groupContent(children)}
    </View>
  );
}

const styles = (activeTheme: any) =>
  StyleSheet.create({
    groupWrapper: {
      alignItems: "flex-start",
      width: "100%",
      paddingTop: 10,
      paddingBottom: 20,
    },
    groupTitle: {
      marginLeft: 10,
      paddingBottom: 8,
      fontSize: 18,
      fontWeight: 600,
      color: activeTheme?.text?.primary,
      backgroundColor: "transparent",
    },
    groupContent: {
      width: "100%",
      paddingHorizontal: 16,
      borderRadius: 20,
      backgroundColor: activeTheme?.background?.secondary,
    },
  });
