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
