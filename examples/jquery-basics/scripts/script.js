$(document).ready(function() {
  
  /*
   * 01: Selecting an element from the DOM
   * Read more: http://api.jquery.com/category/selectors/
   * In this example we will use e class selector:
   * http://api.jquery.com/class-selector/
   */
  
  var myBoxes = $('.box'); // returns object containing all selected elements
  console.log('myBoxes: ', myBoxes);
  
  // We can also log just the first box that is in the collection of boxes found in the DOM
  console.log('%c myBoxes.first()', 'background: #FDD187; color: #120f9d', myBoxes.first())
  
  
  
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
  
  
  
  /*
   * 06: Change HTML
   * Read more: https://api.jquery.com/html
   */
  
  $('#replaceContent').click(function() {
    var container = $('.js-replace-content');
    container.html('<p>Brand new content. <em>Granted!</em></p>');
  });
  
  
  
  /*
   * 07: Add HTML to DOM
   * Read more: https://api.jquery.com/append
   * Using a multiline HTML string with ECMA-Script 6
   * template strings.
   * Read more: https://jack.ofspades.com/multiline-strings-in-es6-javascript/index.html
   */
  
  // Function to create content HTML string
  createContent = function(title, text) {
    return `
    <div class="new-content-wrapper">
    <h2>${title}</h2>
    <p>${text}</p>
    <div class="box-wrapper">
    <div class="box box--tiny"></div>
    <div class="box box--tiny"></div>
    <div class="box box--tiny"></div>
    </div>
    </div>`
  }
   
  $('#addContent').click(function() {
    var container = $('.js-add-content');
    var titleForContent = 'Title passed to function';
    var textForContent = 'This can contain more than just one element';
    
    // Create new html content by calling the function "createContent"
    // 👉🏼 Note the parameters (title and text) which we pass to the function
    var newHTMLContent = createContent(titleForContent, textForContent);
    
    console.log('newHTMLContent: ', newHTMLContent);
    
    // And add the newly created HTML string as the last part of our container
    container.append(newHTMLContent);
  });
  
  
  
  /*
   * 07: Remove element
   * Read more: https://api.jquery.com/category/manipulation/dom-removal/
   * Using: https://api.jquery.com/remove/
   */
  
  $('#removeDiv').click(function() {
    $('#divToRemove').remove()
  });
  
});