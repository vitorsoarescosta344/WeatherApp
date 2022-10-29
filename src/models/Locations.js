import {Realm} from '@realm/react';

export class Locations extends Realm.Object {
  static generate(name, lat, long) {
    return {
      _id: new Realm.BSON.ObjectId(),
      name,
      createdAt: new Date(),
      lat,
      long,
    };
  }

  static schema = {
    name: 'Locations',
    properties: {
      _id: 'objectId',
      name: 'string',
      createdAt: 'date',
      lat: 'float',
      long: 'float',
    },
    primaryKey: '_id',
  };
}
