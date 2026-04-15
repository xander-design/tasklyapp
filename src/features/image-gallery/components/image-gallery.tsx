import { useImageGallery } from "@/features/image-gallery/context/image-provider";
import { useTheme } from "@/features/theme/context/theme-provider";
import { data } from "@/utils/backgrounds";
import { ScreenAction } from "@/utils/style-lib/constants";
import { router } from "expo-router";
import {
  Animated,
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

type ImageItem = {
  id: number;
  filename: string;
  source: ImageSourcePropType;
};

type ImageGalleryProps = {
  scrollY: Animated.Value;
};

export default function ImageGallery(props: ImageGalleryProps) {
  const { scrollY } = props;
  const { activeTheme } = useTheme();
  const { selectedImage, setSelectedImage } = useImageGallery();
  const style = styles(activeTheme);

  const handleSaveAction = (itemData: ImageItem) => {
    setSelectedImage(itemData.source as string);
    router.navigate(ScreenAction.CANCEL);
  };

  const renderItem = ({ item }: { item: ImageItem }) => {
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
    <Animated.FlatList
      data={data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={style.columnWrapper}
      style={style.listContainer}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false },
      )}
      scrollEventThrottle={16}
      contentContainerStyle={style.containerStyle}
    />
  );
}

const styles = (activeTheme: any) =>
  StyleSheet.create({
    columnWrapper: {
      display: "flex",
      justifyContent: "space-between",
      paddingHorizontal: 15,
    },
    listContainer: {
      display: "flex",
      // justifyContent: "space-between",
    },
    containerStyle: {
      paddingTop: 170,
      paddingHorizontal: 16,
      paddingBottom: 32,
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
  });
