import { useDatabase } from "@/features/database/contexts/DatabaseContext";
import { ContextProps, ProviderProps } from "@/features/image-gallery/types";
import React, { createContext, useContext, useEffect, useState } from "react";

const initialSelectedImage = "none";

const ImageGalleryContext = createContext<ContextProps>({
  selectedImage: initialSelectedImage,
  setSelectedImage: () => {},
});

export default function ImageGalleryProvider(props: ProviderProps) {
  const { children } = props;
  const { getSetting, saveSetting } = useDatabase();
  const [selectedImage, setSelectedImage] = useState(initialSelectedImage);

  useEffect(() => {
    const loadData = async () => {
      const savedWallpaper = await getSetting("selectedWallpaper");

      if (savedWallpaper) {
        setSelectedImage(savedWallpaper);
      } else {
        await saveSetting("selectedWallpaper", initialSelectedImage);
        setSelectedImage(initialSelectedImage);
      }
    };

    loadData();
  }, [getSetting, saveSetting]);

  return (
    <ImageGalleryContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
    </ImageGalleryContext.Provider>
  );
}

export const useImageGallery = () => useContext(ImageGalleryContext);
