if ($(".slider__body").length > 0) {
  $(".slider__body").slick({
    dots: true,
    arrows: false,
    accessibility: true,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    nextArrow: "<button type='button' class='slick-next'></button>",
    prevArrow: "<button type='button' class='slick-prev'></button>",
    responsive: [
      {
        breakpoints: 768,
        settings: {},
      },
    ],
  });
}
