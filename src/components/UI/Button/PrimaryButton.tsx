import React, {FC} from 'react';
import {View, Text, StyleSheet, Pressable, Platform} from 'react-native';
import Colors from '../../../constants/colors';

interface IPrimaryButtonProps {
  readonly title?: string;
  readonly onPress?: () => void;
  readonly children?: JSX.Element | JSX.Element[];
}

const PrimaryButton: FC<IPrimaryButtonProps> = ({
  title,
  onPress,
  children,
}): JSX.Element => {
  const androidRippleConfig = {
    color: Colors.primary600,
    borderless: true,
  };

  const onStyleChangeHandler = ({pressed}: {pressed: boolean}) =>
    pressed && Platform.OS === 'ios'
      ? [styles.iOSButtonPressed, styles.buttonInnerContainer]
      : styles.buttonInnerContainer;

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={onStyleChangeHandler}
        onPress={onPress}
        android_ripple={androidRippleConfig}>
        {children ? (
          <Text style={styles.buttonText}>{children}</Text>
        ) : (
          <Text style={styles.buttonText}>{title}</Text>
        )}
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  iOSButtonPressed: {
    opacity: 0.25,
    backgroundColor: Colors.primary600,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',

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
