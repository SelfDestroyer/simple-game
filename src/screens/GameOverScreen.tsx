import React from 'react';
import {View} from 'react-native';
import InstructionText from '../components/UI/Text/InstructionText';

const GameOverScreen = (): JSX.Element => {
  return (
    <View>
      <InstructionText content={'Game Over'} />
    </View>
  );
};
export default GameOverScreen;
