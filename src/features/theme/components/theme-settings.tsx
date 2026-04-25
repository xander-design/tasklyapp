import ActionGroup from "@/components/action-group/action-group";
import TickList from "@/components/ticklist/TickList";
import { useDatabase } from "@/features/database/contexts/DatabaseContext";
import { ThemeSettingsPanelProps } from "@/features/theme/types";

export function ThemeSettings(props: ThemeSettingsPanelProps) {
  const { currentTheme, onThemeSelected } = props;
  const { saveSetting } = useDatabase();

  const handleOnThemeSelect = async (selectedTheme: string) => {
    onThemeSelected(selectedTheme);
    await saveSetting("selectedTheme", selectedTheme);
  };

  return (
    <ActionGroup>
      <TickList
        listData={["system", "dark", "light"]}
        selected={currentTheme}
        onSelect={(selectedTheme) => handleOnThemeSelect(selectedTheme)}
      />
    </ActionGroup>
  );
}
