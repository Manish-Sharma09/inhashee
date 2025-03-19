(function ($) {
  "use strict";
  var windowOn = $(window);

  // Preloader JS
  window.addEventListener("load", function () {
    document.getElementById("preloader").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
    }, 1000);
  });

  $(document).ready(function () {
    $(".bannerSlider").slick({
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      prevArrow:
        '<button type="button" class="slick-prev"><img src="assets/images/slide_arrow_left.png" alt="Previous"></button>',
      nextArrow:
        '<button type="button" class="slick-next"><img src="assets/images/slide_arrow_right.png" alt="Next"></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: { slidesToShow: 1 },
        },
        {
          breakpoint: 992,
          settings: { slidesToShow: 1 },
        },
        {
          breakpoint: 576,
          settings: { slidesToShow: 1 },
        },
      ],
    });
  });


  $(document).ready(function () {
    $(".other-detail-slider").slick({
      dots: false,
      infinite: true,
      speed: 1000,
      cssEase: 'linear',
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      prevArrow:
        '<button type="button" class="slick-prev"><img src="assets/images/slide_arrow_left.png" alt="Previous"></button>',
      nextArrow:
        '<button type="button" class="slick-next"><img src="assets/images/slide_arrow_right.png" alt="Next"></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: { slidesToShow: 3 },
        },
        {
          breakpoint: 992,
          settings: { slidesToShow: 4 },
        },
        {
          breakpoint: 576,
          settings: { slidesToShow: 3 },
        },
      ],
    });
  });
})(jQuery);
