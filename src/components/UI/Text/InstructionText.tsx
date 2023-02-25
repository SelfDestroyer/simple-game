import React, {FC} from 'react';
import {Text, StyleSheet, Platform} from 'react-native';
import Colors from '../../../constants/colors';

interface IInstructionText {
  readonly content: string;
  readonly style?: object;
}

const InstructionText: FC<IInstructionText> = ({
  content,
  style,
}): JSX.Element => {
  return <Text style={[styles.instructionText, style]}>{content}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 23,

    ...Platform.select({
      android: {
        fontFamily: 'Laila-SemiBold',
      },
      ios: {
        fontFamily: 'Laila-SemiBold',
        fontWeight: '600',
      },
    }),
  },
});
