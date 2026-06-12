console.log("js caricato");


const button = document.querySelector('aggiungi');
const input = document.getElementById('#nuovoArticolo');
const list = document.querySelector('#lista');

button.addEventListener("click", function () {
    const inputValue = input.value;
    if (inputValue.lenght === 0) {
        return;
    }
    const newItem = document.createElement('li');
    newItem.textContent = inputValue;
    console.log(inputValue);
    input.value = "";
    input.focus();
})


