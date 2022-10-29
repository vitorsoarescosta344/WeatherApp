import Home from './src/screens/Home';
import {LocationRealmContext} from './src/models';
import Search from './src/screens/Search';

export default function App() {
  const {RealmProvider} = LocationRealmContext;

  return (
    <RealmProvider>
      <Home />
    </RealmProvider>
  );
}
