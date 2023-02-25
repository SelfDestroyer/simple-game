import React, {FC} from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';
import Colors from '../../constants/colors';

interface INumberContainerProps {
  readonly userNumber: number;
}

const NumberContainer: FC<INumberContainerProps> = ({
  userNumber,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{userNumber}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,

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
