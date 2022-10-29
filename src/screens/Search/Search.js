import {useCallback, useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import CountryListItem from '../../components/CountryListItem';
import WeatherCityListItem from '../../components/WeatherCityListItem';
import Container from '../../layout/Container';
import textStyles from '../../utils/GlobalStyles/textStyles';
import {dataSearch} from '../../utils/mockdata';
import {Locations} from '../../models/Locations';
import {LocationRealmContext} from '../../models';

const {useQuery, useRealm} = LocationRealmContext;

export default function Search({navigation}) {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');

  const realm = useRealm();

  async function SearchHandler() {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${searchText}`,
    );

    const resJson = await response.json();

    if (resJson.results !== undefined) {
      setData(resJson.results);
    } else {
      setData([]);
    }
  }

  const handleAddLocation = useCallback(
    (name, lat, long) => {
      realm.write(() => {
        realm.create('Locations', Locations.generate(name, lat, long));
      });
    },
    [realm],
  );

  useEffect(() => {
    SearchHandler();
  }, [searchText]);

  return (
    <>
      <Container>
        <View
          style={{
            backgroundColor: '#88c0d0',
            height: 60,
            padding: 10,
            width: Dimensions.get('screen').width,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={30} color="#FFF" />
          </TouchableOpacity>
          <TextInput
            style={[
              textStyles.textRegular,
              {backgroundColor: '#FFF', color: '#2e3440', flex: 1},
            ]}
            onChangeText={text => setSearchText(text)}
            value={searchText}
          />
        </View>
        <ScrollView>
          {data.length === 0 ? (
            <>
              {dataSearch.map((item, index) => {
                return (
                  <CountryListItem
                    item={item}
                    onAdd={handleAddLocation}
                    key={index}
                  />
                );
              })}
            </>
          ) : (
            <>
              {data.map((item, index) => {
                return (
                  <CountryListItem
                    item={item}
                    onAdd={handleAddLocation}
                    key={index}
                  />
                );
              })}
            </>
          )}
        </ScrollView>
      </Container>
    </>
  );
}
