$('.autoplay').slick({
  slidesToShow: 10,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive:[
          {
              breakpoint: 1500,
              settings:{
                  slidesToShow:7,
              }
          },
          {
              breakpoint: 890,
              settings:{
                  slidesToShow:5,
              }
          },
          {
              breakpoint: 480,
              settings:{
                  slidesToShow:3,
              }
          },
      ]
  });
