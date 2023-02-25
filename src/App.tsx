import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Background from './assets/images/background.png';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

function App(): JSX.Element {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameIsOver, setGameIsOver] = useState<boolean>(false);
  const [guessRounds, setGuessRounds] = useState<number>(0);
  const gameOverHandler = (
    gameOver: boolean,
    numberOfNRounds: number,
  ): void => {
    setGameIsOver(gameOver);
    setGuessRounds(numberOfNRounds);
  };

  const pickedNumberHandler = (pickedNumber: number): void => {
    setUserNumber(pickedNumber);
    gameOverHandler(false, guessRounds);
  };

  const startNewGameHandler = (): void => {
    setUserNumber(null);
    setGuessRounds(0);
    gameOverHandler(false, guessRounds);
  };

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.rootScreen}>
      <ImageBackground
        source={Background}
        resizeMode={'cover'}
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          <StatusBar
            barStyle={'light-content'}
            translucent
            backgroundColor="transparent"
          />
          {userNumber && !gameIsOver ? (
            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
          ) : gameIsOver ? (
            <GameOverScreen
              userNumber={userNumber}
              roundsNumber={guessRounds}
              onStartNewGame={startNewGameHandler}
            />
          ) : (
            <StartGameScreen onPickNumber={pickedNumberHandler} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

export default App;
