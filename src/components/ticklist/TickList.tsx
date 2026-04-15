import { useTheme } from "@/features/theme/context/theme-provider";
import { Entypo } from "@expo/vector-icons";
import { Fragment } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface TickListProps {
  onSelect: (selectedValue: any) => void;
  listData: any;
  selected: string;
}

export default function TickList(props: TickListProps) {
  const { onSelect, listData, selected } = props;
  const { activeTheme } = useTheme();
  const style = styles(activeTheme);

  const handleOnThemeSelect = (selectedOption: string) => {
    onSelect(selectedOption.toLowerCase());
  };

  const renderListData = () => {
    return listData.map((item: string, index: number) => {
      return (
        <Fragment key={item}>
          <Pressable
            onPress={() => handleOnThemeSelect(item.toLowerCase())}
            style={style.itemWrapper}
          >
            <Text style={style.itemText}>{item}</Text>
            {selected === item.toLowerCase() && (
              <Entypo name="check" size={24} style={style.itemIcon} />
            )}
          </Pressable>

          <View style={index < listData.length - 1 && style.itemSeparator} />
        </Fragment>
      );
    });
  };

  return renderListData();
}

const styles = (activeTheme: any) =>
  StyleSheet.create({
    itemWrapper: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    itemText: {
      marginVertical: 14,
      fontSize: 17,
      color: activeTheme.text.primary,
    },
    itemIcon: {
      color: activeTheme.icons.tick,
    },
    itemSeparator: {
      borderBottomWidth: 1,
      borderBottomColor: activeTheme.border.secondary,
    },
  });
