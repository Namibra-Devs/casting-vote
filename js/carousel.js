// =========================CAROUSEL=========================
$('#hero-slider').owlCarousel({
    loop:true,
    autoplay:true,
    margin:0,
    items:1,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
          nav:false,   
        },
        600:{
          nav:false, 
        },
        1000:{
          nav:true,  
        }
    }
  })
  
  $(".carousel").owlCarousel({
      margin:10,
      loop: true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      responsive: {
            0: {
              items:1,
              nav:false,
            },
            768: {
              items:2,
              nav:false,
            },
            1000: {
              items:3,
              nav:false,
            },
            1400: {
              items:3,
              nav:true,
            }
      }
  
  })
  