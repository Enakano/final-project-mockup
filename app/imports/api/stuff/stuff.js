import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');

/**
 * Create the schema for Stuff
 */
export const StuffSchema = new SimpleSchema({
  name: {
    label: 'name',
    type: String,
    optional: false,
    max: 200,
  },
  type: {
    label: 'type',
    type: String,
    optional: false,
    max: 200,
  },
  price: {
    label: 'price',
    type: String,
    optional: false,
    max: 20,
  },
  vendor: {
    label: 'restaurant/vendor',
    type: String,
    optional: false,
    max: 200,
  },
  location: {
    label: 'location',
    type: String,
    optional: false,
    max: 200,
  },
});

Stuff.attachSchema(StuffSchema);
