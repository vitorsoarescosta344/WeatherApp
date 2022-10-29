import Home from './src/screens/Home';
import {LocationRealmContext} from './src/models';
import Search from './src/screens/Search';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default function App() {
  const {RealmProvider} = LocationRealmContext;

  const Stack = createStackNavigator();

  return (
    <RealmProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    </RealmProvider>
  );
}
