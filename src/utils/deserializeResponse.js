export default function deserializeResponse(item) {
  const nowHours = new Date().getHours();

  const nowTemperature = item.hourly.temperature_2m[nowHours];

  const nowWeatherCode = item.hourly.weathercode[nowHours];

  let weatherCondition;

  if (0) {
    weatherCondition = 'clear_sky';
  } else if (nowWeatherCode >= 1 || nowWeatherCode <= 3) {
    weatherCondition = 'overcast';
  } else if (nowWeatherCode >= 45 || nowWeatherCode <= 67) {
    weatherCondition = 'raining';
  } else {
    weatherCondition = 'snowy';
  }

  return {
    nowTemperature,
    weatherCondition,
    lat: item.latitude,
    long: item.longitude,
    dayOrNight: nowHours >= 6 && nowHours <= 18 ? 'day' : 'night',
  };
}
