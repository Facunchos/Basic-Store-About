if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let removeCartItemButtons = document.getElementsByClassName("btn-danger");
  for (i in removeCartItemButtons) {
    let button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  let quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (i in quantityInputs) {
    let input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
  }
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function updateCartTotal() {
  let cartItemContainer =
    document.getElementsByClassName(
      "cart-items"
    )[0]; /*Como devuelve un array, con el [0] nos quedamos con el primer de todos */
  let cartRows = cartItemContainer.getElementsByClassName("cart-row");
  let total = 0;

  for (item in cartRows) {
    let cartRow = cartRows[item];
    let priceElement = cartRow.getElementsByClassName("cart-price")[0];
    let quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    let quantity = quantityElement.value;

    total = total + price * quantity;

    document.getElementsByClassName("cart-total-price")[0].innerText =
      "$" + total;
  }
}

// bla bla bla 
