import { Template } from 'meteor/templating';
import { Food } from '../../api/food/food.js';

Template.List_Available_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */

  foodList() {
    return Food.find();
  },
});

Template.List_Available_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Food');
  });
});

