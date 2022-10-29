import {ScrollView} from 'react-native';
import WeatherCityListItem from '../../components/WeatherCityListItem';
import Container from '../../layout/Container';
import {data} from '../../utils/mockdata';

export default function Home({}) {
  return (
    <>
      <Container>
        <ScrollView>
          <WeatherCityListItem item={data} />
        </ScrollView>
      </Container>
    </>
  );
}
