import { BlurredCollapsibleHeader } from '@/components/blurred-collapsible-header/BlurredCollapsibleHeader';
import { useImageGallery } from '@/context/image-gallery/gallery-provider';
import { useTheme } from '@/context/theme/theme-provider';
import { data } from '@/utils/backgrounds';
import { ScreenAction } from '@/utils/style-lib/constants';
import { router } from 'expo-router';
import React, { useRef } from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Gallery() {
  const { activeTheme } = useTheme();
  const { selectedImage, setSelectedImage } = useImageGallery();
  const style = styles(activeTheme);
  const scrollY = useRef(new Animated.Value(0)).current;

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
        <View style={[style.imageWrapper]}>
          <ImageBackground
            source={item.source}
            style={style.image}
            resizeMode="cover"
          >
            {isSelected && (
              <Image
                source={require('@/assets/icons/tick.png')}
                style={style.imageSelected}
                resizeMode="contain"
              />
            )}
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <BlurredCollapsibleHeader title="Wallpaper" scrollY={scrollY} />

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
    </View>
  );
}

const styles = (activeTheme: any) =>
  StyleSheet.create({
    listContainer: {
      paddingVertical: 40,
    },
    containerStyle: {
      paddingTop: 150,
      paddingHorizontal: 16,
      paddingBottom: 32,
    },
    columnWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
    },
    imageWrapper: {
      width: 150,
      height: 280,
      marginTop: 0,
      marginVertical: 30,
      marginHorizontal: 0,
      borderRadius: 12,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    imageSelected: {
      width: 30,
      height: 30,
      position: 'absolute',
      bottom: 10,
      right: 10,
    },
  });
