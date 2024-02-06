let currentIndex = 0;
const intervalTime = 3000; // Cambia la duración de cada imagen en milisegundos (en este caso, 3 segundos).

function showNextSlide() {
  const carouselInner = document.querySelector('.carousel-inner');
  const totalSlides = document.querySelectorAll('.carousel-item').length;

  currentIndex = (currentIndex + 1) % totalSlides;

  const translateValue = -currentIndex * 100 + '%';
  carouselInner.style.transform = 'translateX(' + translateValue + ')';
}

setInterval(showNextSlide, intervalTime);

