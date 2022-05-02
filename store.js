
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){
    let removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (i in removeCartItemButtons){
        let button = removeCartItemButtons[i]
        button.addEventListener('click', function(event){
            let buttonClicked = event.target
            
            buttonClicked.parentElement.parentElement.remove()
            updateCartTotal()
        })
    }
}



function updateCartTotal(){
    let cartItemContainer = document.getElementsByClassName('cart-items')[0] /*Como devuelve un array, con el [0] nos quedamos con el primer de todos */
    let cartRows = cartItemContainer.getElementsByClassName('cart-row')
    let total = 0

    for(item in cartRows){
        let cartRow = cartRows[item]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        let price = parseFloat(priceElement.innerText.replace('$', ''))
        let quantity = quantityElement.value

        total = total + (price * quantity)
        
        document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
    }
}