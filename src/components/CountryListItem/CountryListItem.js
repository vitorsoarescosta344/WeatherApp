import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import textStyles from '../../utils/GlobalStyles/textStyles';
import styles from './styles';

export default function CountryListItem({item}) {
  return (
    <>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{
              uri: `https://countryflagsapi.com/png/${item.country_code.toLowerCase()}`,
            }}
            style={{height: 50, width: 50, borderRadius: 25, marginRight: 20}}
          />
          <Text
            style={[textStyles.textMedium, {fontSize: 18, color: '#2e3440'}]}>
            {`${item.name} - ${item.country_code}`}
          </Text>
        </View>
        <View>
          <Icon name="plus-circle-outline" size={30} color="#88c0d0" />
        </View>
      </View>
    </>
  );
}
