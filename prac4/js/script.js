$(document).ready(function() {
  $("#showPopup").click(function() {
    $("#overlay").fadeIn();
    $("#popup").fadeIn();
  });

  $("#closePopup").click(function() {
    $("#overlay").fadeOut();
    $("#popup").fadeOut();
  });
});

$(document).ready(function() {
  var totalSlides = $(".slide").length;
  var currentSlide = 1;

  showSlide(currentSlide);

  $("#prevSlide").click(function() {
    if (currentSlide > 1) {
      currentSlide--;
      showSlide(currentSlide);
    }
  });

  $("#nextSlide").click(function() {
    if (currentSlide < totalSlides) {
      currentSlide++;
      showSlide(currentSlide);
    }
  });

  function showSlide(slideIndex) {
    $(".slide").hide();
    $(".slide:nth-child(" + slideIndex + ")").fadeIn();

    $("#prevSlide, #nextSlide").removeClass("button-disabled");

    if (slideIndex === 1) {
      $("#prevSlide").addClass("button-disabled");
    } else if (slideIndex === totalSlides) {
      $("#nextSlide").addClass("button-disabled");
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var sliderContainer = document.querySelector('.slider-container');
  var slider = sliderContainer.querySelector('.slider1');
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

