import { ReactNode } from "react";
import { ImageSourcePropType } from "react-native";

type ContextProps = {
  selectedImage: string;
  setSelectedImage: (index: string) => void;
};

type ProviderProps = {
  children: ReactNode;
};

interface ImageSettingsPanelProps {
  onImageSelected: (theme: string) => void;
}

interface Item {
  source: ImageSourcePropType;
  label: string;
  target: any;
}

export { ContextProps, ImageSettingsPanelProps, Item, ProviderProps };
