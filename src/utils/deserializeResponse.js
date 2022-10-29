export default function deserializeResponse(item) {
  const nowHours = new Date().getHours();

  const nowTemperature = item.hourly.temperature_2m[nowHours];

  const nowWeatherCode = item.hourly.weathercode[nowHours];

  let weatherCondition;

  if (0) {
    weatherCondition = 'clear';
  } else if (nowWeatherCode >= 1 || nowWeatherCode <= 3) {
    weatherCondition = 'overcast';
  } else if (nowWeatherCode >= 45 || nowWeatherCode <= 67) {
    weatherCondition = 'raining';
  }
}
