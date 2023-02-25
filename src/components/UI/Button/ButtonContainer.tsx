import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

interface ButtonContainerProps {
  readonly children: JSX.Element | JSX.Element[];
}

const ButtonContainer: FC<ButtonContainerProps> = ({children}): JSX.Element => {
  return <View style={styles.buttonContainer}>{children}</View>;
};

export default ButtonContainer;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
  },
});
