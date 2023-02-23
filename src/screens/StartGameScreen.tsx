import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={2}
        textAlign={'center'}
        keyboardType={'numeric'}
        inputMode={'numeric'}
        cursorColor={'#ddb52f'}
        selectionColor={'#ddb52f'}
        autoCorrect={false}
      />
      <View style={styles.buttonsGroup}>
        <View style={styles.buttonContainer}>
          <PrimaryButton title={'Reset'} />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton title={'Confirm'} />
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4e0329',
    marginTop: 50,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: 'center',
  },
  input: {
    height: 50,
    fontSize: 32,
    padding: 0,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: '700',
    width: 50,
    textAlign: 'center',
  },
  buttonsGroup: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  buttonContainer: {
    flex: 1,
  },
});
