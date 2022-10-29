import {FlatList, ScrollView, View} from 'react-native';
import WeatherCityListItem from '../../components/WeatherCityListItem';
import Container from '../../layout/Container';
import {data} from '../../utils/mockdata';
import {Locations} from '../../models/Locations';
import {LocationRealmContext} from '../../models';
import {useMemo} from 'react';

const {useQuery, useRealm} = LocationRealmContext;

export default function Home({}) {
  async function GetAllLocation() {
    //const values = await AsyncStorage.getItem;
  }

  const realm = useRealm();

  const result = useQuery(Locations);

  const locations = useMemo(() => result.sorted('createdAt'), [result]);

  return (
    <>
      <Container>
        <FlatList
          data={locations}
          keyExtractor={item => item._id.toString()}
          ItemSeparatorComponent={() => {
            <View style={{height: 1, backgroundColor: '#d9d9d9'}} />;
          }}
          renderItem={({item, index}) => <WeatherCityListItem item={item} />}
        />
      </Container>
    </>
  );
}
