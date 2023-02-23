import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import StartGameScreen from './src/screens/StartGameScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
        <StartGameScreen />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddb52f',
  },
});

export default App;
