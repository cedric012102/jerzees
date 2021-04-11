var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
<<<<<<< HEAD
        event.preventDefault();
=======
>>>>>>> 110821db5be67a6a99e136e50f8db143962ddab0
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}