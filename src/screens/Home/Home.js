import {FlatList, ScrollView, TouchableOpacity, View} from 'react-native';
import WeatherCityListItem from '../../components/WeatherCityListItem';
import Container from '../../layout/Container';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {data} from '../../utils/mockdata';
import {Locations} from '../../models/Locations';
import {LocationRealmContext} from '../../models';
import {useMemo} from 'react';

const {useQuery, useRealm} = LocationRealmContext;

export default function Home({navigation}) {
  async function GetAllLocation() {
    //const values = await AsyncStorage.getItem;
  }

  const realm = useRealm();

  const result = useQuery(Locations);

  const locations = useMemo(() => result.sorted('createdAt'), [result]);

  return (
    <>
      <Container>
        <View
          style={{
            backgroundColor: '#88c0d0',
            padding: 10,
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Icon name="plus" size={30} color="#FFF" />
          </TouchableOpacity>
        </View>
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
