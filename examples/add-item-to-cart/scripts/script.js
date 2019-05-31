$(document).ready(function() {
  
  console.log('hello file');
  
  var $buttons = $('.js-button');
  console.log('$buttons: ', $buttons);
  
  var firstButtonClickCounter = 0;
  
  $buttons.click(function(event) {
    // save the button in a jQuery object
    var $clickedButton = $(event.target);
    
    // find parent
    var $parent = $clickedButton.closest('.js-item');
    console.log('$parent: ', $parent);
    
    // find child of parent with the class js-item-name
    var $nameContainer = $parent.find('.js-item-name');
    console.log('$nameContainer: ', $nameContainer);
    
    // extract the text of the $nameContainer
    var name = $nameContainer.text();
    console.log('name: ', name);
    
    // Much more elegant: select sibling with a selector
    var sibling = $clickedButton.siblings('.js-item-name').text();
    console.log('sibling: ', sibling);
        
    // Select the cart (ul)
    var $cart = $('.js-cart-items');
    var htmlString = `<li class="cart-item">${name}</li>`;
    // var htmlString = '<li class="cart-item">' + name + '</li>';
    
    $cart.append(htmlString);
    $clickedButton.attr('disabled', true);

    
  });
});








