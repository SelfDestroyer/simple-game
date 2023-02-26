import React, {FC} from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import Colors from '../../../constants/colors';

interface ICard {
  readonly children: JSX.Element | JSX.Element[];
}

const Card: FC<ICard> = ({children}): JSX.Element => {
  const {width, height} = useWindowDimensions();
  const cardContainerDynamicStyles = {
    marginTop: height < width ? 18 : 36,
    padding: height < width ? 5 : 16,
  };
  return (
    <View style={[styles.cardContainer, cardContainerDynamicStyles]}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
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
    borderColor: Colors.accent500,
    borderWidth: 1,
  },
});
