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
