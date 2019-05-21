$(document).ready(function() {
  
  var ingredients = [
    {
      name: 'Mozzarella di Buffala',
      id: 'mozzarella',
      price: '4.00'
    },
    {
      name: 'Salami',
      id: 'salami',
      price: '3.00'
    },
    {
      name: 'Caviar',
      id: 'caviar',
      price: '13.00'
    },
    {
      name: 'Truffles',
      id: 'truffles',
      price: '18.00'
    },
    {
      name: 'Olives',
      id: 'olives',
      price: '1.50'
    },
    {
      name: 'Cherry Tomatoes',
      id: 'cherry-tomatoes',
      price: '1.50'
    }
  ];
  
  function displayIngredients(ingredients) {
    var template = $('#template').children();
    
    // loop over ingredients
    for (var i = 0; i < ingredients.length; i++) {
      // because "template" is always referring to the same instance, we would fill interval
      // for each ingredient with new content, and we would only see the last one being added
      var clonedTemplate = template.clone();
      var populatedTemplate = populateTemplate(clonedTemplate, ingredients[i]);
      $('#ingredients-wrapper').append(populatedTemplate);
    }
    
    // populate template with data
    
  }
  
  function populateTemplate(template, ingredient) {
    template.find('.js-ingredient-name').html(ingredient.name);
    template.find('.js-ingredient-price').html(ingredient.price);
    template.find('.js-checkbox').attr('id', ingredient.id);
    template.find('.js-ingredient-checkbox-label').attr('for', ingredient.id);
    return template;
  }
  
  function calculateTotalPrice(ingredients) {
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
  
  function displaySelectedIngredients(ingredients) {
    var container = $('.js-final-ingredients');
    
    // clearing list
    container.html('');
    
    // add a list item for each selected ingredient
    ingredients.each(function() {
      // retrieve the name of the item
      var ingredientName = $(this).find('.js-ingredient-name').html();
      console.log('ingredientName: ', ingredientName);
      // create list item HTML
      var listHTML = `<li class="chosen-ingredient">${ingredientName}</li>`;
      // and add it at the end of the ul
      container.append(listHTML);
    })
  }
  
  $('#calculate-price-button').click(function() {
    var selectedIngredients = getSelectedIngredients();
    var price = calculateTotalPrice(selectedIngredients);
    console.log('price: ', price);
    
    displayPriceOnScreen(price);
    displaySelectedIngredients(selectedIngredients);
  })
  
  displayIngredients(ingredients);
});