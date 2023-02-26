import React, {FC, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Platform,
  Text,
  Vibration,
  useWindowDimensions,
} from 'react-native';
import SuccessImage from '../assets/images/success.png';
import Title from '../components/UI/Text/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/UI/Button/PrimaryButton';

interface IGameOverScreenProps {
  readonly roundsNumber: number;
  readonly userNumber: number | null;
  readonly onStartNewGame: () => void;
}

const GameOverScreen: FC<IGameOverScreenProps> = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}): JSX.Element => {
  const {width, height} = useWindowDimensions();

  const containerDynamicStyles = {
    padding: height < width ? 12 : 24,
  };
  const imageContainerDynamicStyles = {
    width: height < width ? 130 : width < 400 ? 200 : 300,
    height: height < width ? 130 : width < 400 ? 200 : 300,
    borderRadius: height < width ? 130 : width < 400 ? 200 : 200,
    margin: height < width ? 18 : 36,
  };

  useEffect(() => {
    Vibration.vibrate(700);
  }, []);

  return (
    <View style={[styles.container, containerDynamicStyles]}>
      <Title title={'Game Over'} />

      <View style={[styles.imageContainer, imageContainerDynamicStyles]}>
        <Image style={styles.image} source={SuccessImage} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton title={'Start New Game'} onPress={onStartNewGame} />
    </View>
  );
};
export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: Colors.primary800,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  summaryText: {
    ...Platform.select({
      android: {
        fontFamily: 'Laila-Regular',
      },
      ios: {
        fontFamily: 'Laila-Regular',
        fontWeight: '400',
      },
    }),
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    ...Platform.select({
      android: {
        fontFamily: 'Laila-Bold',
      },
      ios: {
        fontFamily: 'Laila-Bold',
        fontWeight: '700',
      },
    }),
    color: Colors.primary500,
  },
});
