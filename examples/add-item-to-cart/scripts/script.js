$(document).ready(function() {
  
  $('.js-button').click(function(event) {
    var $target = $(event.target);
    
    // find the name of the clicked item
    var $parent = $target.closest('.js-item');
    console.log('$parent: ', $parent);
    
    // get the name of the item
    var name = $parent.find('.js-item-name').text();
    console.log('name: ', name)
    
    // add item to cart
    var $cart = $('.js-cart-items');
    console.log('$cart: ', $cart);
    
    var newItem = `<li class="cart-item">${name}</li>`;
    
    $cart.append(newItem)
    
    // disable button
    $target.addClass('is-inactive');
        
  });
});