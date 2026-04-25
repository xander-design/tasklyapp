import App from "@/app/app";
import { DatabaseProvider } from "@/features/database/contexts/DatabaseContext";
import ImageGalleryProvider from "@/features/image-gallery/context/image-provider";
import ThemeProvider from "@/features/theme/context/theme-provider";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <DatabaseProvider>
      <ThemeProvider>
        <ImageGalleryProvider>
          <App />
        </ImageGalleryProvider>
      </ThemeProvider>
    </DatabaseProvider>
  );
}
