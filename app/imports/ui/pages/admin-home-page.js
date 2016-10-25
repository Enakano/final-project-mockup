import { Template } from 'meteor/templating';


$('.message .close')
    .on('click', function() {
      $(this)
          .closest('.message')
          .transition('fade')
      ;
    });
