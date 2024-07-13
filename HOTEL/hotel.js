var typed = new Typed('.text', {
  strings: [
      'ITALIAN CUISINE.',
      'CHINESE CUISINE.',
      'INDIAN CUISINE.',
      'JAPANESE CUISINE.',
      'FRENCH CUISINE.',
  ],
  typeSpeed: 50,
  backSpeed: 80,
  loop: true
});

// Cart management
let cart = [];

// Update cart quantity display
function updateCartQuantity() {
  const cartQuantity = $('.quantity');
  cartQuantity.text(cart.length);
}

// Add to cart functionality
$('.menu_btn').on('click', function (e) {
  e.preventDefault();
  const item = $(this).data('item');
  const price = parseFloat($(this).data('price'));
  cart.push({ item, price });
  updateCartQuantity();
  alert(`${item} has been added to your cart.`);
});

// Order form submission
$('.summit').on('click', function (e) {
  e.preventDefault();
  const name = $('input[placeholder="Enter Your Name here"]').val();
  const email = $('input[placeholder="Enter your Email here"]').val();
  const address = $('input[placeholder="Enter your Address here"]').val();
  const phone = $('input[placeholder="Enter your Phno here"]').val();

  if (name && email && address && phone && cart.length > 0) {
      let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
      alert(`Thank you for your order, ${name}! Your total price is $${totalPrice.toFixed(2)}. We will deliver your food to ${address}.`);
      // Clear the form
      $('input[placeholder="Enter Your Name here"]').val('');
      $('input[placeholder="Enter your Email here"]').val('');
      $('input[placeholder="Enter your Address here"]').val('');
      $('input[placeholder="Enter your Phno here"]').val('');
      // Clear the cart
      cart = [];
      updateCartQuantity();
  } else if (cart.length === 0) {
      alert('Your cart is empty. Please add items to your cart before ordering.');
  } else {
      alert('Please fill in all the fields.');
  }
});