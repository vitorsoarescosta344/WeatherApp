import {ActivityIndicator, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import textStyles from '../../utils/GlobalStyles/textStyles';
import styles from './styles';
import {containerColors, icons} from '../../utils/weathercode';
import deserializeResponse from '../../utils/deserializeResponse';
import {useEffect, useState} from 'react';

export default function WeatherCityListItem({item}) {
  const [deserialized, setDeserialized] = useState({});
  const [loading, setLoading] = useState(true);

  async function SearchHandler() {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${item.lat}&longitude=${item.long}&hourly=temperature_2m,weathercode&daily=weathercode&timezone=auto`,
    );

    const resJson = await response.json();

    setDeserialized(deserializeResponse(resJson));

    setLoading(false);
  }

  useEffect(() => {
    SearchHandler();
  }, []);

  const iconProps =
    icons[`${deserialized.weatherCondition}_${deserialized.dayOrNight}`];

  const color =
    containerColors[
      `${deserialized.weatherCondition}_${deserialized.dayOrNight}`
    ];

  return (
    <>
      {loading === false ? (
        <View style={[styles.container, {backgroundColor: color}]}>
          <Text
            style={[
              textStyles.textMedium,
              {fontSize: 28, color: iconProps.color},
            ]}>
            {`${
              item.name.split(' ')[0]
            } - ${deserialized.nowTemperature.toFixed(1)}°C`}
          </Text>
          <View>
            <Icon name={iconProps.icon} color={iconProps.color} size={45} />
          </View>
        </View>
      ) : (
        <>
          <View
            style={[
              styles.container,
              {
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'gray',
              },
            ]}>
            <ActivityIndicator color={'#2e3440'} size={'small'} />
          </View>
        </>
      )}
    </>
  );
}
