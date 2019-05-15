$(document).ready(function() {
  
  /*
   * 01: Selecting an element from the DOM
   * Read more: http://api.jquery.com/category/selectors/
   * In this example we will use e class selector:
   * http://api.jquery.com/class-selector/
   */
  
  var myBoxes = $('.box'); // returns object containing all selected elements
  console.log('myBoxes: ', myBoxes);
  
  
  
  /*
   * 02: Using a click handler
   * Read more: https://api.jquery.com/click/
   */
  
  
  $('#fadeButton').click(function(event) {
    console.log('Fade out that div! 👻');
    console.log('event.target: ', event.target);
  });

  /*
  * Advanced:
  * Exactly the same can be written using arrow functions
  * Has effect on the context of 'this'
  */
  
  $('#fadeButton').click((event) => {
    console.log('Ghosting triggered by arrow function 👻');
  });
  
  
  
  /*
   * 03: Fading out element
   * Read more: https://api.jquery.com/fadeIn/
   */
  
  $('#fadeButton').click(function() {
    $('#divToFade').fadeOut(); // reduces the elements opacity to 0 over time
  });
  
  
  
  /*
   * 04: Manipulate CSS properties
   * Read more: https://api.jquery.com/css/
   */
  
   $('#changeColorButton').click(function() {
     var currentColor = $('#divToDye').css('background-color');     
     console.log('currentColor: ', currentColor);
     
     if (currentColor === 'rgb(0, 140, 255)') {
       $('#divToDye').css('background-color', 'rgb(72, 236, 167)');
     } else {
       $('#divToDye').css('background-color', 'rgb(0, 140, 255)');
     }
   });
   
  
  
  
  /*
   * 05: Toggle classes
   * The neat way to transform layout properties, 
   * which allow to set transitions easily!
   * Read more: https://api.jquery.com/toggleClass/
   */
  
  $('#toggleClass').click(function() {
    var boxesToToggleClass = $('.js-toggle-class-target');
    boxesToToggleClass.toggleClass('box--highlighted');
  });
  
});