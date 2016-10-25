import { Food } from '../../api/food/food.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Food to pre-fill the Collection.
 * @type {*[]}
 */
const foodSeeds = [
  { name: 'Flautas', type: 'Mexican', price: '$8.50', vendor: 'Sergs', location: 'Krauss Hall' },
  { name: 'Burritos', type: 'Mexican', price: '$8.50', vendor: 'Sergs', location: 'Holmes Hall' },
  { name: '2 Tacos', type: 'Mexican', price: '$8.50', vendor: 'Sergs', location: 'Krauss Hall' },
  { name: 'Chimichangas', type: 'Mexican', price: '$8.50', vendor: 'Sergs', location: 'Holmes Hall' },
];


/**
 * Initialize the Food collection if empty with seed data.
 */
if (Food.find().count() === 0) {
  _.each(foodSeeds, function seedFood(stuff) {
    Food.insert(stuff);
  });
}
