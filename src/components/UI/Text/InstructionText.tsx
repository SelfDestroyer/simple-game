import React, {FC} from 'react';
import {Text, StyleSheet, Platform, useWindowDimensions} from 'react-native';
import Colors from '../../../constants/colors';

interface IInstructionText {
  readonly content: string;
  readonly style?: object;
}

const InstructionText: FC<IInstructionText> = ({
  content,
  style,
}): JSX.Element => {
  const {height, width} = useWindowDimensions();
  const instructionTextDynamicStyles = {
    fontSize: height > width ? 24 : 18,
  };
  return (
    <Text style={[styles.instructionText, instructionTextDynamicStyles, style]}>
      {content}
    </Text>
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,

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
