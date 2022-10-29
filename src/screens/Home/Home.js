import {ScrollView} from 'react-native';
import WeatherCityListItem from '../../components/WeatherCityListItem';
import Container from '../../layout/Container';

export default function Home({}) {
  return (
    <>
      <Container>
        <ScrollView>
          <WeatherCityListItem />
        </ScrollView>
      </Container>
    </>
  );
}
