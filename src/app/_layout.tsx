import App from "@/app/app";
import ImageGalleryProvider from "@/features/image-gallery/context/image-provider";
import ThemeProvider from "@/features/theme/context/theme-provider";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ImageGalleryProvider>
        <App />
      </ImageGalleryProvider>
    </ThemeProvider>
  );
}
