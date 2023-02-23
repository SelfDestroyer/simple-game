import React, {FC} from 'react';
import {View, Text, StyleSheet, Pressable, Platform} from 'react-native';

interface IPrimaryButtonProps {
  readonly title: string;
}

const PrimaryButton: FC<IPrimaryButtonProps> = ({title}): JSX.Element => {
  const androidRippleConfig = {
    color: '#b299a5',
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
        onPress={() => console.log('press')}
        android_ripple={androidRippleConfig}>
        <Text style={styles.buttonText}>{title}</Text>
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
    backgroundColor: '#72063c',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  iOSButtonPressed: {
    opacity: 0.25,
    backgroundColor: '#4d0528',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
  },
});
