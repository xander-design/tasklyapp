import App from "@/app/app";
import ThemeProvider from "@/features/theme/context/theme-provider";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
