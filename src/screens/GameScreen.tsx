import React, {FC, useState, useEffect} from 'react';
import {View, StyleSheet, Platform, Alert} from 'react-native';
import Title from '../components/UI/Text/Title';
import generateRandomBetween from '../utils/generateRandomBetween';
import NumberContainer from '../components/Game/NumberContainer';
import PrimaryButton from '../components/UI/Button/PrimaryButton';
import Card from '../components/UI/Card/Card';
import InstructionText from '../components/UI/Text/InstructionText';
import ButtonsGroup from '../components/UI/Button/ButtonsGroup';
import ButtonContainer from '../components/UI/Button/ButtonContainer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface IGameScreen {
  readonly userNumber: number;
  readonly onGameOver: (gameIsOver: boolean) => void;
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: FC<IGameScreen> = ({userNumber, onGameOver}): JSX.Element => {
  const [currentGuess, setCurrentGuess] = useState<number>(
    generateRandomBetween(1, 100, userNumber),
  );

  useEffect(() => {
    if (currentGuess === userNumber && userNumber) {
      onGameOver(true);
    }
  }, [currentGuess, onGameOver, userNumber]);

  const nextCurrentGuessHandler = (direction: string): void => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong....', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    setCurrentGuess(
      generateRandomBetween(minBoundary, maxBoundary, currentGuess),
    );
  };

  return (
    <View style={styles.container}>
      <NumberContainer userNumber={currentGuess} />
      <Card>
        <InstructionText
          content={'Higher or Lower?'}
          style={styles.instructionText}
        />
        <ButtonsGroup>
          <ButtonContainer>
            <PrimaryButton
              onPress={nextCurrentGuessHandler.bind(this, 'lower')}>
              <MaterialIcons name="remove" size={24} color="white" />
            </PrimaryButton>
          </ButtonContainer>
          <ButtonContainer>
            <PrimaryButton
              onPress={nextCurrentGuessHandler.bind(this, 'greater')}>
              <MaterialIcons name="add" size={24} color="white" />
            </PrimaryButton>
          </ButtonContainer>
        </ButtonsGroup>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    ...Platform.select({
      android: {
        marginTop: 50,
      },
    }),
  },
  instructionText: {
    marginBottom: 15,
  },
});
