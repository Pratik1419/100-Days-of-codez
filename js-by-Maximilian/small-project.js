let productElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");

function updateCharacters(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;
}

productElement.addEventListener("input", updateCharacters);