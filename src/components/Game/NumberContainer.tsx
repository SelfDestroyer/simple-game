import React, {FC} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  useWindowDimensions,
} from 'react-native';
import Colors from '../../constants/colors';

interface INumberContainerProps {
  readonly userNumber: number;
}

const NumberContainer: FC<INumberContainerProps> = ({
  userNumber,
}): JSX.Element => {
  const {width, height} = useWindowDimensions();

  const containerDynamicStyles = {
    padding: height < width ? 16 : 24,
    margin: height < width ? 16 : 24,
  };

  const numberTextDynamicStyles = {
    fontSize: height < width ? 32 : 40,
  };

  return (
    <View style={[styles.container, containerDynamicStyles]}>
      <Text style={[styles.numberText, numberTextDynamicStyles]}>
        {userNumber}
      </Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,

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
