import ActionGroup from "@/components/action-group/action-group";
import ImageList from "@/components/image-list/ImageList";
import { useImageGallery } from "@/features/image-gallery/context/image-provider";

export default function ImageSettings() {
  const { selectedImage } = useImageGallery();

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
      />
    </ActionGroup>
  );
}
