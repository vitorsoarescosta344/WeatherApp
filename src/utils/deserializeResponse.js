import {
  zonedTimeToUtc,
  utcToZonedTime,
  format,
  getTimezoneOffset,
} from 'date-fns-tz';

export default function deserializeResponse(item) {
  const tzOffset = getTimezoneOffset() / 3.6e6;

  const date = new Date();

  const utc = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours() + tzOffset * Math.sign(tzOffset),
  );

  const nowHours = new Date(utc)
    .toLocaleString('pt-BR', {timeZone: item.timezone})
    .split(' ')[1]
    .split(':')[0];

  const nowTemperature = item.hourly.temperature_2m[parseInt(nowHours)];

  const nowWeatherCode = item.hourly.weathercode[parseInt(nowHours)];

  let weatherCondition;

  if (nowWeatherCode === 0) {
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
    dayOrNight:
      parseInt(nowHours) >= 6 && parseInt(nowHours) <= 18 ? 'day' : 'night',
  };
}
