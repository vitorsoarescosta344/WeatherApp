import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import textStyles from '../../utils/GlobalStyles/textStyles';
import styles from './styles';
import {containerColors, icons} from '../../utils/weathercode';
import deserializeResponse from '../../utils/deserializeResponse';

export default function WeatherCityListItem({item}) {
  const deserialized = deserializeResponse(item);

  const iconProps =
    icons[`${deserialized.weatherCondition}_${deserialized.dayOrNight}`];

  const color =
    containerColors[
      `${deserialized.weatherCondition}_${deserialized.dayOrNight}`
    ];

  const iconProp = icons['clear_sky_day'];

  return (
    <>
      <View style={[styles.container, {backgroundColor: color}]}>
        <Text
          style={[
            textStyles.textMedium,
            {fontSize: 28, color: iconProps.color},
          ]}>
          {`${'Brasilia'} - ${deserialized.nowTemperature.toFixed(1)}°C`}
        </Text>
        <View>
          <Icon name={iconProps.icon} color={iconProps.color} size={45} />
        </View>
      </View>
    </>
  );
}
