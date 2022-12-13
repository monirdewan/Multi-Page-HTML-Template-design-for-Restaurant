$(document).ready(function(){
    $('.slider-item').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        loop:true,
        prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>' ,
        nextArrow:'<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
      });
    $('.testimonials').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        loop:true,
        arrows:false,
        dots:true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
            }
          }]
      });

      $('#nav').slicknav();
});