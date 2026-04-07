import ThemeProvider from '@/context/theme/theme-provider';
import App from "@/app/app";
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}