import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
