const sliderPlugin = (active) => {
  const slides = document.querySelectorAll('.slide');

  slides[active].classList.add('active');

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      slides.forEach((slid) => {
        slid.classList.remove('active');
      });
      slide.classList.add('active');
    });
  }
}

sliderPlugin(2);