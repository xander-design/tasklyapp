import { StyleSheet, Text, View } from 'react-native';
import Card from '@/components/card/Card';
import { useTheme } from '@/context/theme/theme-provider';

export default function HomeScreen() {
  const { activeTheme } = useTheme();
  const style = styles(activeTheme);

  return (
      <View style={ style.container } >
        <Card>
          <Text style={ style.text }>This is a card</Text>
        </Card>
      </View>
  );
}

const styles = (activeTheme: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
      paddingVertical: 50,
      backgroundColor: activeTheme.background.primary,
    },
    text: {
      color: activeTheme.text.primary,
    }
  });
};
