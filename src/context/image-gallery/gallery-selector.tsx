import { Fragment } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "@/context/theme/theme-provider";
import { GallerySelectorProps, Item } from "@/context/image-gallery/types";
import { SwatchSize } from "@/utils/style-lib/constants";
import Card from "@/components/card/Card";

export default function GallerySelector(props: GallerySelectorProps) {
  const { onSelect, listData, title, styleList } = props;
  const { activeTheme } = useTheme();
  const style= styles(activeTheme);

  const handleOnSelect = (target: any) => {
    onSelect(target);
  };

  const renderListData = () => {
    return listData.map((item: Item, index: number) => {
      const { source, label, target } = item;

      return (
        <Fragment key={index}>
          <View>
            <Pressable
              onPress={() => handleOnSelect(target)}
              style={[style.container]}
            >
              <View style={style.imageWrapper}>
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

  return <Card title={title} stylesList={ style.wrapper }>{renderListData()}</Card>;
}

const styles = (activeTheme: any) =>
  StyleSheet.create({
    wrapper: {
      marginTop: 30
    },
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    imageWrapper: {
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
      borderColor: activeTheme.border.tertiary,
    },
    imageLabel: {
      marginVertical: 8,
      paddingLeft: 8,
      fontSize: 17,
      color: activeTheme.text.primary,
    },
    imageIcon: {
      color: activeTheme.border.secondary,
    },
    itemSeparator: {
      borderBottomColor: activeTheme.border.secondary,
      borderBottomWidth: 1,
    },
  });
