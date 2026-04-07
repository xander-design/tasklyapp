import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Appearance } from "react-native";
import { Colours, ThemeStyle } from "./colours";
import { ThemeColour } from "@/context/theme/types"

type ProviderProps = {
  children: ReactNode;
};

type ContextProps = {
  activeTheme: ThemeColour;
  currentTheme: string;
  setCurrentTheme: (currentTheme: string) => void;
};

const setColourScheme = () => {
  return (
    Appearance.getColorScheme() === ThemeStyle.DARK
      ? Colours[ThemeStyle.DARK]
      : Colours[ThemeStyle.LIGHT]
  );
}

export const ThemeContext = createContext<ContextProps>({
  activeTheme: Colours[ThemeStyle.LIGHT],
  currentTheme: ThemeStyle.SYSTEM,
  setCurrentTheme: () => {},
});

export default function ThemeProvider(props: ProviderProps) {
  const { children } = props;
  const [activeTheme, setActiveTheme] = useState<ThemeColour>(setColourScheme());
  const [currentTheme, setCurrentTheme] = useState<string>(ThemeStyle.SYSTEM);

  useEffect(() => {
    // const loadData = async () => {
    //   const results = await SelectSetting();

    //   if (results.length > 0) {
    //     setCurrentTheme(results[0].value);
    //   } else {
    //     setCurrentTheme(ThemeOptions.SYSTEM);
    //   }
    // };

    // loadData();
    setCurrentTheme(ThemeStyle.SYSTEM);
  }, []);

  useEffect(() => {
    const applyData = () => {
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

    applyData();
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        currentTheme,
        setCurrentTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
