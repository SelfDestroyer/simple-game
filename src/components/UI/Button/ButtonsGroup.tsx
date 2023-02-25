import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

interface IButtonsGroupProps {
  readonly children: JSX.Element | JSX.Element[];
}

const ButtonsGroup: FC<IButtonsGroupProps> = ({children}): JSX.Element => {
  return <View style={styles.buttonsGroup}>{children}</View>;
};

export default ButtonsGroup;
const styles = StyleSheet.create({
  buttonsGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
