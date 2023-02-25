import React, {FC} from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';
import Colors from '../../constants/colors';

interface IGuessLogItemProps {
  readonly roundNumber: number;
  readonly guess: number;
}

const GuessLogItem: FC<IGuessLogItemProps> = ({
  roundNumber,
  guess,
}): JSX.Element => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemText}>#{roundNumber}</Text>
    <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
  </View>
);

export default GuessLogItem;

const styles = StyleSheet.create({
  itemContainer: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    shadowOpacity: 0.25,
  },
  itemText: {
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
