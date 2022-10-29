import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import textStyles from '../../utils/GlobalStyles/textStyles';
import styles from './styles';
import {containerColors, icons} from '../../utils/weathercode';

// console.log(
//   new Date().toLocaleDateString('pt-br', {
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//   }),
// );

console.log(new Date().getHours());

export default function WeatherCityListItem(params) {
  return (
    <>
      <View
        style={[
          styles.container,
          {backgroundColor: containerColors.overcast_night},
        ]}>
        <Text
          style={[
            textStyles.textMedium,
            {fontSize: 28, color: icons.overcast_night.color},
          ]}>
          {`${'Brasilia'} - ${21}°C`}
        </Text>
        <View>
          <Icon
            name={icons.overcast_night.icon}
            color={icons.overcast_night.color}
            size={45}
          />
        </View>
      </View>
    </>
  );
}
