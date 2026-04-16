import { ThemeColours } from "@/features/theme/types";

enum ThemeStyle {
  SYSTEM = "system",
  DARK = "dark",
  LIGHT = "light",
}

const Colours: ThemeColours = {
  dark: {
    text: {
      primary: "rgba(254, 254, 254, 1)",
      secondary: "rgba(181, 180, 187, 1)",
      tertiary: "rgba(166, 166, 173, 1)",
      quaternary: "rgba(0, 0, 0, 1)",
    },
    tint: "rgba(255, 255, 255, 1)",
    background: {
      primary: "rgba(36, 35, 37, 1)",
      secondary: "rgba(54, 53, 55, 1)",
      tertiary: "rgba(83, 82, 86, 1)",
      quaternary: "rgba(0, 0, 0, 1)",
    },
    border: {
      primary: "rgba(45, 45, 45, 1)",
      secondary: "rgba(67, 67, 68, 1)",
      tertiary: "rgba(157, 155, 155, 1)",
    },
    icons: {
      tick: "rgba(48, 209, 88, 1)",
      twisty: "rgba(81, 81, 83, 1)",
    },
    colours: {
      red: "rgba(255, 69, 58, 1)",
      orange: "rgba(255, 159, 10, 1)",
      yellow: "rgba(255, 214, 10, 1)",
      green: "rgba(48, 209, 88, 1)",
      mint: "rgba(99, 230, 226, 1)",
      teal: "rgba(64, 200, 244, 1)",
      cyan: "rgba(100, 210, 255, 1)",
      blue: "rgba(10, 132, 255, 1)",
      indigo: "rgba(94, 92, 230, 1)",
      purple: "rgba(191, 90, 242, 1)",
      pink: "rgba(255, 55, 95, 1)",
      brown: "rgba(172, 142, 104, 1)",
      gray: "rgba(142, 142, 147, 1)",
      gray2: "rgba(99, 99, 102, 1)",
      gray3: "rgba(72, 72, 74, 1)",
      gray4: "rgba(58, 58, 60, 1)",
      gray5: "rgba(44, 44, 46, 1)",
      gray6: "rgba(28, 28, 30, 1)",
    },
  },
  light: {
    text: {
      primary: "rgba(31, 29, 43, 1)",
      secondary: "rgba(98, 99, 104, 1)",
      tertiary: "rgba(107, 107, 112, 1)",
      quaternary: "rgba(254, 254, 254, 1)",
    },
    tint: "rgba(0, 0, 0, 1)",
    background: {
      primary: "rgba(235, 234, 239, 1)",
      secondary: "rgba(254, 254, 254, 1)",
      tertiary: "rgba(216, 216, 218, 1)",
      quaternary: "rgba(187, 187, 191, 1)",
    },
    border: {
      primary: "rgba(31, 33, 45, 1)",
      secondary: "rgba(228, 228, 228, 1)",
      tertiary: "rgba(151, 151, 151, 1)",
    },
    icons: {
      tick: "rgba(52, 199, 89, 1)",
      twisty: "rgba(196, 196, 202, 1)",
    },
    colours: {
      red: "rgba(255, 59, 48, 1)",
      orange: "rgba(255, 149, 0, 1)",
      yellow: "rgba(255, 204, 0, 1)",
      green: "rgba(52, 199, 89, 1)",
      mint: "rgba(0, 199, 190, 1)",
      teal: "rgba(48, 176, 199, 1)",
      cyan: "rgba(50, 173, 230, 1)",
      blue: "rgba(0, 122, 255, 1)",
      indigo: "rgba(88, 86, 214, 1)",
      purple: "rgba(175, 82, 222, 1)",
      pink: "rgba(255, 45, 85, 1)",
      brown: "rgba(162, 132, 94, 1)",
      gray: "rgba(142, 142, 147, 1)",
      gray2: "rgba(174, 174, 178, 1)",
      gray3: "rgba(199, 199, 204, 1)",
      gray4: "rgba(209, 209, 214, 1)",
      gray5: "rgba(229, 229, 234, 1)",
      gray6: "rgba(242, 242, 247, 1)",
    },
  },
};

export { Colours, ThemeStyle };
