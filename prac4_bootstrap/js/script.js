document.addEventListener('DOMContentLoaded', function() {
  var sliderContainer = document.querySelector('.slider-container');
  var slider = sliderContainer.querySelector('.slider');
  var prevBtn = document.querySelector('.prev-btn');
  var nextBtn = document.querySelector('.next-btn');
  var sliderItems = slider.querySelectorAll('.slider-item');
  var slideWidth = sliderItems[0].offsetWidth;
  var currentIndex = 0;

  function slideTo(index) {
    slider.style.transform = 'translateX(' + (-slideWidth * index) + 'px)';
    currentIndex = index;
    updateSliderControls();
  }

  function slideNext() {
    if (currentIndex < sliderItems.length - 1) {
      slideTo(currentIndex + 1);
    }
  }

  function slidePrev() {
    if (currentIndex > 0) {
      slideTo(currentIndex - 1);
    }
  }

  function updateSliderControls() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === sliderItems.length - 1;
  }

  prevBtn.addEventListener('click', slidePrev);
  nextBtn.addEventListener('click', slideNext);

  updateSliderControls();
});