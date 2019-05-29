$(document).ready(function() {
  
  $('.js-button').click(function(event) {
    $button = $(event.target);
    
    // change the buttons text
    $button.text('Added');
    
    // get data attribute to revel correct item in cart
    var itemName = $button.attr('data-item');
    console.log('itemName: ', itemName);
    
    // get the right item to reveal
    var $itemToReveal = $('#' + itemName);
    console.log('$itemToReveal: ', $itemToReveal);
    
    $itemToReveal.removeClass('is-hidden');
    
  });
  
});