console.log("js caricato");


const closeButton = document.querySelector('.close-btn');
const notification = document.querySelector('.notification');

closeButton.addEventListener('click', function () {
    notification.remove();
});


