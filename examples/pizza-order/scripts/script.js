$(document).ready(function() {
  
  var ingredients = [
    {
      name: 'Mozzarella',
      price: '2.00',
      currency: 'CHF'
    }
  ]
  
  function calculateTotalPrice() {
    var selectedIngredients = getSelectedIngredients();
    console.log('selectedIngredients: ', selectedIngredients);
    
    var totalPrice = addPrices(selectedIngredients);
    return totalPrice;
  }
  
  function addPrices(ingredients) {
    var totalPrice = 0;
    
    // jquerys $(selector).each is just like a javascript loop
    // looping over all ingredients
    ingredients.each(function() {
      console.log('this: ', this)
      var price = $(this).find('.js-ingredient-price').html();
      
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
      var priceAsNumber = parseFloat(price, 10);
      totalPrice = totalPrice + priceAsNumber;
    });
    
    return totalPrice;
  }

  function getSelectedIngredients() {
    // go through each of the ingredients and check if they are selected
    var allIngredients = $('.js-ingredient');
    console.log('allIngredients: ', allIngredients);
    
    // jquerys filter can reduce a collection depending on the return value of a function
    // We now check in this function if the checkbox of this element is selected
    // If it is not, we filter the ingredient out
    var filteredIngredients = allIngredients.filter(function(index) {
      console.log('index: ', index)
      
      var checkbox = $(this).find('.js-checkbox');
      
      // reading the checkboxes state
      var checkboxState = checkbox.is(':checked');
      console.log('checkboxState: ', checkboxState);
      
      // if we return true, the element is still in the original collection
      // if checkboxState is false the element is filtered out
      return checkboxState;
    });
    
    return filteredIngredients;
  }
  
  function displayPriceOnScreen(price) {
    var formattedPrice = price.toFixed(2);
    $('#price-amount').html(`<strong>${formattedPrice} CHF</strong>`);
  }
  
  $('#calculate-price-button').click(function() {
    var price = calculateTotalPrice();
    console.log('price: ', price);
    
    displayPriceOnScreen(price);
  })
});