import { useTheme } from "@/context/theme/theme-provider";
import TickList from "@/components/ticklist/TickList"
import ThemedContainer from "@/components/themed-container/ThemedContainer";
import { useImageGallery } from "@/context/image-gallery/gallery-provider"
import { useNavigation } from "@react-navigation/native";
import GallerySelector from "@/context/image-gallery/gallery-selector";
import {View} from "react-native";

export default function SettingsScreen() {
  const { currentTheme, setCurrentTheme } = useTheme();
  const { selectedImage } = useImageGallery();
  const navigation = useNavigation<any>();

  const handleOnThemeSelect = (selectedTheme: string) => {
    setCurrentTheme(selectedTheme);
  };

  const handleOnImageSelect = (selected: any) => {
    navigation.navigate(selected);
  };

  return (
    <ThemedContainer isScrollable>

      <TickList
        title=""
        listData={["System", "Dark", "Light"]}
        selected={currentTheme}
        onSelect={(selectedTheme) => handleOnThemeSelect(selectedTheme)}
      />

      <GallerySelector
        listData={[
          {
            source: selectedImage,
            label: "Wallpaper",
            target: 'screens/gallery',
          },
        ]}
        onSelect={(selectedWallpaper) =>
          handleOnImageSelect(selectedWallpaper)
        }
      />

    </ThemedContainer>
  );
}
