console.log("js caricato");



const button = document.getElementById('#aggiungi');
const input = document.getElementById('#nuovoArticolo');
const list = document.getElementById('#lista');

button.addEventListener("click", function () {

    if (inputValue.length === 0) {
        return;
    }

    const newItem = document.createElement('li');
    newItem.textContent = inputValue;
    list.append(newItem);
    console.log(inputValue);
    input.value = "";
    input.focus();
});


