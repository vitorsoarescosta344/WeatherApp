import {createRealmContext} from '@realm/react';
import {Locations} from './Locations';

export const LocationRealmContext = createRealmContext({
  schema: [Locations],
});
