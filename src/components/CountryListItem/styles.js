import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
