$(function(){
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

   

    $(".footer__btn").click(function(){
    $(".footer__info-box").fadeIn('');
    $(".footer__btn").addClass('footer__btn-up');
    });
    
  


    $('.header__btn').on('click', function(){
        $('.header__list'). slideToggle();
      });


	
    var mixer = mixitup('.portfolio__items',{
        animation: {
            effects: 'fade translateX(100%)',
            reverseOut: true,
            nudge: false 
        }

    });	
    
});