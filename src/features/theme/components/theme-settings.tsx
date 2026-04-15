import ActionGroup from "@/components/action-group/action-group";
import TickList from "@/components/ticklist/TickList";
import { ThemeSettingsPanelProps } from "@/features/theme/types";

export function ThemeSettings(props: ThemeSettingsPanelProps) {
  const { currentTheme, onThemeSelected } = props;

  const handleOnThemeSelect = (selectedTheme: string) => {
    onThemeSelected(selectedTheme);
  };

  return (
    <ActionGroup>
      <TickList
        listData={["System", "Dark", "Light"]}
        selected={currentTheme}
        onSelect={(selectedTheme) => handleOnThemeSelect(selectedTheme)}
      />
    </ActionGroup>
  );
}
