import { Template } from 'meteor/templating';
import { Food } from '../../api/food/food.js';


Template.Admin_Home_Page.helpers({
foodList() {
  return Food.find();
},
});

Template.Admin_Home_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Food');
  });
});

$('.message .close')
    .on('click', function() {
      $(this)
          .closest('.message')
          .transition('fade')
      ;
    });

