const navContainer = document.querySelectorAll('.nav-container');


navContainer.forEach(container => {
    const width = container.offsetWidth;
    container.addEventListener('mouseenter', () => {
        container.style.width = `${String(width + 50)}px`;
    });
    container.addEventListener('mouseleave', () => {
        container.style.width = `${width}px`
    });
});


const pathImages = document.querySelectorAll('.path-img');


pathImages.forEach(images => {
    const top = window.getComputedStyle(images).top;
    images.style.top = `${String(parseFloat(top) + 860)}px`;
});

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if(i === index) {
      slide.classList.add('active');

    }
  });

  clearTimeout(slideTimeout);
  slideTimeout = setTimeout(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000);
}
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let current = 0;
let slideTimeout;

nextBtn.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

showSlide(current);
