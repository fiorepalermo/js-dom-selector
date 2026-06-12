console.log("js caricato");

const bottoneContatore = document.getElementById('conta');

let conteggio = 0;


bottoneContatore.addEventListener('click', function () {
    conteggio++;

    bottoneContatore.textContent = `Click: ${conteggio}`;
});