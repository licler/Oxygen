$(function(){

// header
  $(function() {
    let header = $('.header');
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header__fixed');
      } else {
       header.removeClass('header__fixed');
      }
    });
   });

  

//  let scrollOffset = 0,
//      previousH = $('.previous').innerHeight(),
//      header = $('.header');
     

//   $(window).on('scroll', function(){
//      scrollOffset = $(this).scrollTop();
//      if(scrollOffset >=previousH){
//      header.addClass('header__fixed');
//      } else {
//       header.removeClass('header__fixed');
//      }
// });

$("[data-scroll]").on("click", function(event) {
  event.preventDefault();

  var $this = $(this),
      blockId = $this.data('scroll'),
      blockOffset = $(blockId).offset().top;

  $("#nav a").removeClass("header__item-link--active");
  $this.addClass("header__item-link--active");

  $("html, body").animate({
      scrollTop:  blockOffset
  }, 500);
});

  















	//  начало счетчик
	$('.numpage__item-num').each(function () {
        $(this).prop('Counter', 0).animate({
                Counter: $(this).data('value')
            }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {                      
                $(this).text(Math.ceil(this.Counter));
            }
        });
    });
  
  


// конец счетчик


//  slider
    $('.people__slider').slick({	
        arrows: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/content/back.svg" alt="images"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/content/next.svg" alt="images"></button>',
        dots: true,
        responsive: [
            {
              breakpoint: 860,
              settings: {
                infinite: true,
                dots: false,
                arrows: false
              }
            }
        ]
      });

   
// footer
    $('.footer__btn').on('click', function(){
      // $('.footer__btn').addClass('footer__btn--active');
    $('.footer__info-box').slideToggle('');
    $('.footer__btn-images').rotate({animateTo:180});
    });
  
// header-btn
    $('.header__btn').on('click', function(){
        $('.header__list'). slideToggle();
      });
     
     
   
      new WOW().init();



	// portfolio
    var mixer = mixitup('.portfolio__items',{
        animation: {
            effects: 'fade translateX(100%)',
            reverseOut: true,
            nudge: false 
        }

    });	
    
});

// header__item-link--active