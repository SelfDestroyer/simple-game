import React, {FC} from 'react';
import {Text, StyleSheet, Platform, useWindowDimensions} from 'react-native';

interface ITitleProps {
  readonly title: string;
}

const Title: FC<ITitleProps> = ({title}): JSX.Element => {
  const {width, height} = useWindowDimensions();
  const titleDynamicStyles = {
    padding: height < width ? 6 : 12,
    fontSize: height < width ? 18 : 24,
  };

  return <Text style={[styles.title, titleDynamicStyles]}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 8,
    maxWidth: '80%',
    width: 300,
    ...Platform.select({
      android: {
        fontFamily: 'Laila-Bold',
      },
      ios: {
        fontFamily: 'Laila-Bold',
        fontWeight: '700',
      },
    }),
  },
});
