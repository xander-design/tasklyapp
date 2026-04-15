import ActionGroup from "@/components/action-group/action-group";
import ImageList from "@/components/image-list/ImageList";
import { useImageGallery } from "../context/image-provider";
import { ImageSettingsPanelProps } from "../types";

export default function ImageSettings(props: ImageSettingsPanelProps) {
  const { onImageSelected } = props;
  const { selectedImage } = useImageGallery();

  const handleOnImageSelect = (selectedImage: any) => {
    onImageSelected(selectedImage);
  };

  return (
    <ActionGroup>
      <ImageList
        listData={[
          {
            source: selectedImage,
            label: "Wallpaper",
            target: "screens/wallpaper-gallery",
          },
        ]}
        onSelect={(selectedImage) => handleOnImageSelect(selectedImage)}
      />
    </ActionGroup>
  );
}
