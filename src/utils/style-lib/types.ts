export type ThemeUnits = {
  padding: ThemeUnit;
  margin: ThemeUnit;
}

export interface Theme extends ThemeUnits, ThemeTypography {}

export interface ThemeUnit {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface ThemeTypography {
  xs: number;
  sm: number;
  base: number;
  md: number;
  lg: number;
  xl: number;
}
