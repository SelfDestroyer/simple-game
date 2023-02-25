import React, {FC} from 'react';
import {Text, StyleSheet, Platform} from 'react-native';

interface ITitleProps {
  readonly title: string;
}

const Title: FC<ITitleProps> = ({title}): JSX.Element => (
  <Text style={styles.title}>{title}</Text>
);

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    borderRadius: 8,

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
