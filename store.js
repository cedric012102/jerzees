var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
        event.preventDefault();
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}