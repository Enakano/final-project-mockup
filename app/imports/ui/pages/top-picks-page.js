import { Template } from 'meteor/templating';
import { Food } from '../../api/food/food.js';

Template.Top_Picks_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */

  foodList() {
    return Food.find();
  },
});

Template.Top_Picks_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Food');
  });
});

