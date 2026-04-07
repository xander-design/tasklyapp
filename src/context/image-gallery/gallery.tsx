import {
  FlatList,
  Image,
  ImageBackground, StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";
import { useImageGallery } from "@/context/image-gallery/gallery-provider";
import { useTheme } from "@/context/theme/theme-provider";
import { data } from "@/utils/backgrounds";
import { ScreenAction } from "@/utils/style-lib/constants";
import Card from "@/components/card/Card";

export default function Gallery() {
  const { activeTheme } = useTheme();
  const { selectedImage, setSelectedImage } = useImageGallery();
  const style= styles(activeTheme);

  const handleSaveAction = (itemData: any) => {
    setSelectedImage(itemData.source);
    router.navigate(ScreenAction.CANCEL);
  };

  const renderItem = ({ item }: { item: any }) => {
    const isSelected = selectedImage === item.source;

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => handleSaveAction(item)}
      >
        <View style={[style.itemContainer]}>
          <ImageBackground
            source={item.source}
            style={style.image}
            resizeMode="cover"
          >
            {isSelected && (
              <Image
                source={require("@/assets/icons/tick.png")}
                style={style.selectedTick}
                resizeMode="contain"
              />
            )}
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Card>
      <View style={style.container}>
        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={style.listContainer}
        />
      </View>
    </Card>
  );
}

const styles = (activeTheme: any) =>
  StyleSheet.create({
    container: {
      marginVertical: 0,
    },
    listContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
    itemContainer: {
      width: 150,
      height: 280,
      marginVertical: 20,
      marginHorizontal: 0,
      borderRadius: 12,
      backgroundColor: "#eee",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
    },
    selectedTick: {
      width: 30,
      height: 30,
      position: "absolute",
      bottom: 10,
      right: 10,
    },
  })

