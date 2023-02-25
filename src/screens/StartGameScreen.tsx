import React, {FC, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Platform,
  TextInputChangeEventData,
  NativeSyntheticEvent,
  Alert,
} from 'react-native';
import PrimaryButton from '../components/UI/Button/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/UI/Text/Title';
import Card from '../components/UI/Card/Card';
import InstructionText from '../components/UI/Text/InstructionText';
import ButtonContainer from '../components/UI/Button/ButtonContainer';
import ButtonsGroup from '../components/UI/Button/ButtonsGroup';

interface IStartGameScreen {
  onPickNumber: (userNumber: number) => void;
}

const StartGameScreen: FC<IStartGameScreen> = ({onPickNumber}): JSX.Element => {
  const [userNumber, setUserNumber] = useState<string>('');

  const changeTextInputHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => setUserNumber(e.nativeEvent.text);

  const resetTextInputHandler = (): void => setUserNumber('');
  const confirmTextInputHandler = (): void => {
    const enteredNumber = parseInt(userNumber, 10);

    if (isNaN(enteredNumber) || enteredNumber <= 0 || enteredNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be between 1 and 99.', [
        {
          text: 'Okay',
          style: 'destructive',
          onPress: resetTextInputHandler,
        },
      ]);
      return;
    } else {
      onPickNumber(enteredNumber);
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Title title={'Guess My Number'} />
      <Card>
        <InstructionText
          content={'Enter a Number'}
          style={styles.instructionText}
        />
        <TextInput
          style={styles.input}
          maxLength={2}
          textAlign={'center'}
          keyboardType={'numeric'}
          inputMode={'numeric'}
          cursorColor={Colors.accent500}
          selectionColor={Colors.accent500}
          autoCorrect={false}
          onChange={changeTextInputHandler}
          value={userNumber}
          onSubmitEditing={confirmTextInputHandler}
          autoFocus
        />
        {userNumber.length !== 0 ? (
          <ButtonsGroup>
            <ButtonContainer>
              <PrimaryButton title={'Reset'} onPress={resetTextInputHandler} />
            </ButtonContainer>
            <ButtonContainer>
              <PrimaryButton
                title={'Confirm'}
                onPress={confirmTextInputHandler}
              />
            </ButtonContainer>
          </ButtonsGroup>
        ) : (
          <ButtonsGroup>
            <ButtonContainer>
              <PrimaryButton
                title={'Confirm'}
                onPress={confirmTextInputHandler}
              />
            </ButtonContainer>
          </ButtonsGroup>
        )}
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: 100,
      },
      ios: {
        marginTop: 50,
      },
    }),
    alignItems: 'center',
  },
  instructionText: {
    marginBottom: 5,
  },
  input: {
    height: 50,
    fontSize: 32,
    padding: 0,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    width: 50,
    textAlign: 'center',

    ...Platform.select({
      android: {
        fontFamily: 'Laila-Bold',
      },
      ios: {
        fontFamily: 'Laila-Bold',
        fontWeight: '700',
      },
    }),
  },
});
