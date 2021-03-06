import { Stuff } from '../../api/stuff/stuff.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const stuffSeeds = [
  { name: 'Flautas', type: 'Mexican', price: '$8.50', vendor: 'Sergs', location: 'Krauss Hall' },
  { name: 'Burritos', type: 'Mexican', price: '$8.50', vendor: 'Sergs', location: 'Holmes Hall' },
  { name: '2 Tacos', type: 'Mexican', price: '$8.50', vendor: 'Sergs', location: 'Krauss Hall' },
  { name: 'Chimichangas', type: 'Mexican', price: '$8.50', vendor: 'Sergs', location: 'Holmes Hall' },
];


/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Stuff.find().count() === 0) {
  _.each(stuffSeeds, function seedStuffs(stuff) {
    Stuff.insert(stuff);
  });
}
