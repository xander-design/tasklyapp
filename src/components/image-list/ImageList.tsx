import { useTheme } from "@/features/theme/context/theme-provider";
import { SwatchSize } from "@/utils/style-lib/constants";
import { Entypo } from "@expo/vector-icons";
import { Fragment } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface ImageListProps {
  onSelect: (target: any) => void;
  listData: any;
}

interface Item {
  source: ImageSourcePropType;
  label: string;
  target: any;
}

export default function ImageList(props: ImageListProps) {
  const { onSelect, listData } = props;
  const { activeTheme } = useTheme();
  const style = styles(activeTheme);

  const handleOnImageSelect = (target: any) => {
    onSelect(target);
  };

  const renderListData = () => {
    return listData.map((item: Item, index: number) => {
      const { source, label, target } = item;

      return (
        <Fragment key={index}>
          <View>
            <Pressable
              onPress={() => handleOnImageSelect(target)}
              style={[style.itemWrapper]}
            >
              <View style={style.itemContent}>
                <Image source={source} style={[style.image]} />
                <Text style={style.imageLabel}>{label}</Text>
              </View>
              <Entypo
                name="chevron-thin-right"
                size={24}
                style={style.imageIcon}
              />
            </Pressable>
          </View>
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
    itemContent: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 6,
    },
    image: {
      width: SwatchSize.SMALL,
      height: SwatchSize.SMALL,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: activeTheme.border.secondary,
    },
    imageLabel: {
      marginVertical: 8,
      paddingLeft: 8,
      fontSize: 17,
      color: activeTheme.text.primary,
    },
    imageIcon: {
      color: activeTheme.border.tertiary,
    },
    itemSeparator: {
      borderBottomColor: activeTheme.border.secondary,
      borderBottomWidth: 1,
    },
  });
