// Prendo elementi interessati dal DOM
const backButton = document.getElementById('back');
const nextButton = document.getElementById('next');
const images = document.querySelectorAll('#carousel img');

// Indice nodo immagine visibile
let currentActiveIndex = 0;
// Rendo visibile la prima immagine
images[0].classList.add('active');

// Reagiamo al next
nextButton.addEventListener('click', function() {
    // Blocchiamo se siamo alla fine
     if (currentActiveIndex == images.length - 1) return
     
    // Rimuovo classe active all'img che attualmente lo ha
    images[currentActiveIndex].classList.remove('active');

    // Incremento l'indice 
    currentActiveIndex ++;
    images[currentActiveIndex].classList.add('active');
})

backButton.addEventListener('click', function(){
    // Blocchiamo se siamo all'inizio
    if (!currentActiveIndex) return 

    images[currentActiveIndex].classList.remove('active');

    //Decremento indice
    currentActiveIndex--;
    images[currentActiveIndex].classList.add('active');
})