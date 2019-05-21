$(document).ready(function() {
  
  var burger = $('#burger');
  var navigation = $('#navigation');
  
  function transformBurgerIcon() {
    burger.toggleClass('is-active');
  }

  function showNavigation() {
    navigation.toggleClass('is-open');
  }
  

  burger.click(function(event) {
    transformBurgerIcon();
    showNavigation();
  });
});