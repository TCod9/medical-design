$(document).ready(function() {
    var thumbs = $("#doctor-list");
    var testimonials = $("#testimonials");
 
    thumbs
      .on("initialized.owl.carousel", function() {
      thumbs
        .find(".owl-item")
        .eq(0)
        .addClass("current");
    })
      .owlCarousel({
      items: 6,
      dots: false,
      nav: true,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: 6,
      navText: [
        '<i class="fa fa-arrow-left owl-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right owl-right" aria-hidden="true"></i>'
      ],
      responsive: {
        0: {
          items: 1
        },
    
        600: {
          items: 3
        },
    
        1024: {
          items: 4
        },
    
        1366: {
          items: 6
        }
      },
      responsiveRefreshRate: 100
    });

    testimonials
      .on("initialized.owl.carousel", function() {
        testimonials
        .find(".owl-item")
        .eq(0)
        .addClass("current");
    })
      .owlCarousel({
      items: 1,
      dots: false,
      nav: true,
      loop:true,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: 1,
      navText: [
        '<i class="fa fa-arrow-left owl-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right owl-right" aria-hidden="true"></i>'
      ],
      responsiveRefreshRate: 100
    });
  
  });
  