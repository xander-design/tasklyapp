import { ContextProps, ProviderProps } from "@/features/image-gallery/types";
import React, { createContext, useContext, useEffect, useState } from "react";

const initialSelectedImage = "1";

const ImageGalleryContext = createContext<ContextProps>({
  selectedImage: initialSelectedImage,
  setSelectedImage: () => {},
});

export default function ImageGalleryProvider(props: ProviderProps) {
  const { children } = props;
  const [selectedImage, setSelectedImage] = useState(initialSelectedImage);

  useEffect(() => {
    const loadData = async () => {};
    loadData();
  }, []);

  useEffect(() => {
    const applyData = async () => {};
    applyData();
  }, [selectedImage]);

  return (
    <ImageGalleryContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
    </ImageGalleryContext.Provider>
  );
}

export const useImageGallery = () => useContext(ImageGalleryContext);
