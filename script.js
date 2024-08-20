// Prendo sorgenti dell'immagine
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp']

// Prendo elementi interessati dal DOM
const backButton = document.getElementById('back');
const nextButton = document.getElementById('next');
const CarouselGallery = document.querySelector('.gallery')
const thumbGallery = document.getElementById('thumbnails')

let imgs = ''

for (let i = 0; i < sources.length; i++) {
    imgs += `<img alt="" src="${sources[i]}">`    
}

CarouselGallery.innerHTML = imgs
thumbGallery.innerHTML = imgs

const images = document.querySelectorAll('#carousel img');
const thumbs = document.querySelectorAll('#thumbnails img');

// Indice nodo immagine visibile
let currentActiveIndex = 0;

// Rendo visibile la prima immagine e carosello
images[currentActiveIndex].classList.add('active');
thumbs[currentActiveIndex].classList.add('active');
// Reagiamo al next
nextButton.addEventListener('click', function() {
  

    // Rimuovo classe active all'img che attualmente lo ha
    images[currentActiveIndex].classList.remove('active');
    thumbs[currentActiveIndex].classList.remove('active');

    // Incremento l'indice 
    currentActiveIndex ++;

    // Controlliamo se siamo fuori dall'array
    if (currentActiveIndex == images.length) {
        currentActiveIndex = 0
    }

    // Metto classe active all'img successiva
    images[currentActiveIndex].classList.add('active');
    thumbs[currentActiveIndex].classList.add('active');
})

backButton.addEventListener('click', function(){

    images[currentActiveIndex].classList.remove('active');

    //Decremento indice
    currentActiveIndex--;

     // Controlliamo se siamo fuori dall'array
     if (currentActiveIndex < 0) {
        currentActiveIndex = images.length - 1
    }

    images[currentActiveIndex].classList.add('active');     
})