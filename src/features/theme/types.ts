import { ReactNode } from "react";

export type ThemeColours = {
  dark: ThemeColour;
  light: ThemeColour;
};

export interface ThemeColour {
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
  };
  tint: string;
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
  };
  border: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  icons: {
    tick: string;
    twisty: string;
  };
  colours: {
    red: string;
    orange: string;
    yellow: string;
    green: string;
    mint: string;
    teal: string;
    cyan: string;
    blue: string;
    indigo: string;
    purple: string;
    pink: string;
    brown: string;
    gray: string;
    gray2: string;
    gray3: string;
    gray4: string;
    gray5: string;
    gray6: string;
  };
}

export type ProviderProps = {
  children: ReactNode;
};

export type ContextProps = {
  activeTheme: ThemeColour;
  currentTheme: string;
  setCurrentTheme: (currentTheme: string) => void;
};

export type ThemeSettingsPanelProps = {
  currentTheme: string;
  onThemeSelected: (theme: string) => void;
};
