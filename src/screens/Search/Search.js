import {useEffect, useState} from 'react';
import {Dimensions, FlatList, ScrollView, TextInput, View} from 'react-native';
import CountryListItem from '../../components/CountryListItem';
import WeatherCityListItem from '../../components/WeatherCityListItem';
import Container from '../../layout/Container';
import textStyles from '../../utils/GlobalStyles/textStyles';
import {dataSearch} from '../../utils/mockdata';

export default function Search({}) {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');

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
          }}>
          <TextInput
            style={[
              textStyles.textRegular,
              {backgroundColor: '#FFF', color: '#2e3440'},
            ]}
            onChangeText={text => setSearchText(text)}
            value={searchText}
          />
        </View>
        <ScrollView>
          {data.length === 0 ? (
            <>
              {dataSearch.map((item, index) => {
                return <CountryListItem item={item} />;
              })}
            </>
          ) : (
            <>
              {data.map((item, index) => {
                return <CountryListItem item={item} />;
              })}
            </>
          )}
        </ScrollView>
      </Container>
    </>
  );
}
