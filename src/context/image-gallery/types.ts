import {ReactNode} from "react";
import {ImageSourcePropType} from "react-native";
import GallerySelector from "@/context/image-gallery/gallery-selector";

type ContextProps = {
  selectedImage: string;
  setSelectedImage: (index: string) => void;
};

type ProviderProps = {
  children: ReactNode;
};

interface GallerySelectorProps {
  onSelect: (target: any) => void;
  listData: any;
  title?: string;
  styleList?: string;
}

interface Item {
  source: ImageSourcePropType;
  label: string;
  target: any;
}


export {ContextProps, ProviderProps, GallerySelectorProps, Item}