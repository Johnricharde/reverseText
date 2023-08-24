// MODEL ////////////////////////////////////////////////////////////////////////////////////////
let userInput = document.getElementById('user-input');
let text = document.getElementById('text');
let reversedText = "";
// VIEW /////////////////////////////////////////////////////////////////////////////////////////
function updateView() {
    text.textContent = reversedText;
}

// CONTROLLER ///////////////////////////////////////////////////////////////////////////////////
function reverseText() {
    for (let i = userInput.value.length - 1; i >= 0; i--) {
        reversedText += userInput.value[i]
    }
    updateView()
    clearValues()
}

function clearValues() {
    reversedText = "";
    userInput.value = "";
}
