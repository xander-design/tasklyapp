import { useTheme } from '@/context/theme/theme-provider';
import { BlurView } from 'expo-blur';
import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type CardProps = {
  children: ReactNode;
  title?: string;
  stylesList?: any;
  blurred?: boolean;
};

function Card(props: CardProps) {
  const { children, title, stylesList, blurred = false } = props;
  const { activeTheme } = useTheme();
  // @ts-ignore
  const style = styles(activeTheme);

  const blurredView = () => {
    return (
      <BlurView tint="dark" intensity={60} style={ style.blurContainer }>
        {children}
      </BlurView>
    );
  };

  const opaqueView = () => {
    return (
      <View style={ style.cardContainer } >
        {children}
      </View>
    );
  };

  return (
    <View style={[style.cardWrapper, stylesList && { ...stylesList }]}>
      {title && (
        <Text style={ style.cardTitle }>
          {title}
        </Text>
      )}
      <View style={style.cardContent}>
        {blurred ? blurredView() : opaqueView()}
      </View>
    </View>
  );
}

const styles = (activeTheme: any) =>
  StyleSheet.create({
  cardWrapper: {
    alignItems: 'flex-start',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: activeTheme?.background?.secondary,
    borderRadius: 18
  },
  cardTitle: {
    marginLeft: 10,
    marginBottom: 6,
    fontSize: 20,
    color: activeTheme?.text?.primary
  },
  cardContent: {
    width: '100%',
    paddingHorizontal: 10,
  },
  cardContainer: {
    paddingHorizontal: 18,
    // borderRadius: 18,
  },
  blurContainer: {
    width: '100%',
    paddingHorizontal: 10,
    // borderRadius: 18,
    overflow: 'hidden',
  },
});

export default Card;
