import React, {FC, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Alert,
  Vibration,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import generateRandomBetween from '../utils/generateRandomBetween';
import NumberContainer from '../components/Game/NumberContainer';
import PrimaryButton from '../components/UI/Button/PrimaryButton';
import Card from '../components/UI/Card/Card';
import InstructionText from '../components/UI/Text/InstructionText';
import ButtonsGroup from '../components/UI/Button/ButtonsGroup';
import ButtonContainer from '../components/UI/Button/ButtonContainer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GuessLogItem from '../components/Game/GuessLogItem';
import Title from '../components/UI/Text/Title';

interface IGameScreen {
  readonly userNumber: number;
  readonly onGameOver: (
    gameIsOver: boolean,
    getGuessRoundsListLength: number,
  ) => void;
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: FC<IGameScreen> = ({userNumber, onGameOver}): JSX.Element => {
  const [currentGuess, setCurrentGuess] = useState<number>(
    generateRandomBetween(1, 100, userNumber),
  );
  const [guessRounds, setGuessRounds] = useState<number[]>([currentGuess]);
  const {width, height} = useWindowDimensions();

  const guessRoundsHandler = (newValue: number): void =>
    setGuessRounds((prevState: number[]) => [newValue, ...prevState]);
  const getGuessRoundsListLength = guessRounds.length;

  useEffect(() => {
    if (currentGuess === userNumber && userNumber) {
      onGameOver(true, getGuessRoundsListLength);
    }
  }, [currentGuess, getGuessRoundsListLength, onGameOver, userNumber]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextCurrentGuessHandler = (direction: string): void => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Vibration.vibrate(700);
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

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );

    setCurrentGuess(newRndNumber);
    guessRoundsHandler(newRndNumber);
  };

  const renderItemHandler = ({
    item,
    index,
  }: {
    item: number;
    index: number;
  }): JSX.Element => (
    <GuessLogItem roundNumber={getGuessRoundsListLength - index} guess={item} />
  );
  const keyExtractorHandler = (item: number): string => `key-${item}`;

  const containerDynamicStyles = {
    padding: height < width ? 10 : 16,
    ...Platform.select({
      android: {
        marginTop: height < width ? 0 : 50,
      },
    }),
  };

  const instructionTextDynamicStyles = {
    marginBottom: height < width ? 0 : 15,
    marginTop: height < width ? 50 : 0,
  };

  const listContainerTextDynamicStyles = {
    padding: height < width ? 0 : 10,
    paddingBottom: height < width ? 0 : 0,
    alignSelf: height < width ? 'stretch' : 'auto',
  };

  return (
    <View style={[styles.container, containerDynamicStyles]}>
      <Title title={"Opponent's Guess"} />

      {height < width ? (
        <>
          <InstructionText
            content={'Higher or Lower?'}
            style={instructionTextDynamicStyles}
          />
          <View style={styles.containerLandscape}>
            <ButtonContainer>
              <PrimaryButton
                onPress={nextCurrentGuessHandler.bind(this, 'lower')}>
                <MaterialIcons name="remove" size={24} color="white" />
              </PrimaryButton>
            </ButtonContainer>
            <NumberContainer userNumber={currentGuess} />
            <ButtonContainer>
              <PrimaryButton
                onPress={nextCurrentGuessHandler.bind(this, 'greater')}>
                <MaterialIcons name="add" size={24} color="white" />
              </PrimaryButton>
            </ButtonContainer>
          </View>
        </>
      ) : (
        <>
          <NumberContainer userNumber={currentGuess} />
          <Card>
            <InstructionText
              content={'Higher or Lower?'}
              style={instructionTextDynamicStyles}
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
        </>
      )}

      <View style={[styles.listContainer, listContainerTextDynamicStyles]}>
        <FlatList
          data={guessRounds}
          renderItem={renderItemHandler}
          keyExtractor={keyExtractorHandler}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerLandscape: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
  },
});
