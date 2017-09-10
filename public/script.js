var source = $('#cart-template').html();
var template = Handlebars.compile(source);

// an array with all of our cart items
var cart = [];

var updateCart = function () {
  let shoppingCart = $('.shopping-cart'),
  shoppingCartList = shoppingCart.find('.cart-list'),
  cartTotal = shoppingCart.find('.total');
  shoppingCartList.empty();
  total = 0;
  for(let i = 0, l = cart.length; i<l; i++) {
    let newHTML = template(cart[i]);
    shoppingCartList.append(newHTML);
    total += cart[i].price;
  }
  cartTotal.empty();
  cartTotal.append(total);
}


var addItem = function (item) {
  cart.push(item);
}

var clearCart = function () {
  cart = [];
  console.log($(this))
  $('.cart-list').empty();
  $('.total').html('0');
}

$('.view-cart').on('click', function() {
  $('.shopping-cart').toggle();
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  item = $(this).closest('.item').data();
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
