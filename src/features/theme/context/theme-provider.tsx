import { useDatabase } from "@/features/database/contexts/DatabaseContext";
import { Colours, ThemeStyle } from "@/features/theme/colours";
import {
  ContextProps,
  ProviderProps,
  ThemeColour,
} from "@/features/theme/types";
import { createContext, useContext, useEffect, useState } from "react";
import { Appearance } from "react-native";

const setColourScheme = () => {
  return Appearance.getColorScheme() === ThemeStyle.DARK
    ? Colours[ThemeStyle.DARK]
    : Colours[ThemeStyle.LIGHT];
};

export const ThemeContext = createContext<ContextProps>({
  activeTheme: Colours[ThemeStyle.LIGHT],
  currentTheme: ThemeStyle.SYSTEM,
  setCurrentTheme: () => {},
});

export default function ThemeProvider(props: ProviderProps) {
  const { children } = props;
  const [currentTheme, setCurrentTheme] = useState<string>(ThemeStyle.SYSTEM);
  const [activeTheme, setActiveTheme] =
    useState<ThemeColour>(setColourScheme());
  const { getSetting, saveSetting } = useDatabase();

  useEffect(() => {
    const loadSavedData = async () => {
      const savedTheme = await getSetting("selectedTheme");
      if (savedTheme) {
        setCurrentTheme(savedTheme);
      } else {
        await saveSetting("selectedTheme", ThemeStyle.SYSTEM);
        setCurrentTheme(ThemeStyle.SYSTEM);
      }
    };

    loadSavedData();
  }, [getSetting, saveSetting]);

  useEffect(() => {
    const updateActiveTheme = () => {
      if (currentTheme === ThemeStyle.DARK) {
        setActiveTheme({
          ...Colours[ThemeStyle.DARK],
        });
      }

      if (currentTheme === ThemeStyle.LIGHT) {
        setActiveTheme({
          ...Colours[ThemeStyle.LIGHT],
        });
      }

      if (currentTheme === ThemeStyle.SYSTEM) {
        setActiveTheme(setColourScheme());
      }
    };

    updateActiveTheme();
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        currentTheme,
        setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
