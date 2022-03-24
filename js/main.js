$(function(){

// --header-------------------------------------------
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

// ------------ клик по ссылкам----------------------
$("[data-scroll]").on("click", function(event) {
  event.preventDefault();

  var $this = $(this),
      blockId = $this.data('scroll'),
      blockOffset = $(blockId).offset().top;

  $("#nav a").removeClass("header__item-link--active");
  $this.addClass("header__item-link--active");

  // закрытие меню после выбора ссылки/////////////////////////////////////////
  if (menuBtn.classList.contains('active')){
    document.body.classList.remove('_lock');
    menuBtn.classList.remove('active');
    menuList.classList.remove('active');
   }
   ///////////////////////////////////////////////////////////////////////

  $("html, body").animate({
      scrollTop:  blockOffset
  }, 500);
});
// --------------------------------------------------------



//----------------------начало счетчик // --------------------------------------------------------
	
const counters = document.querySelectorAll('.numpage__item-num');

counters.forEach((counter)  =>{
  counter.innerHTML = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-value");
    const c = +counter.innerText;

    if(c < target) {
      counter.innerText = c + 1;
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter()
})

window.addEventListener('scroll', function(){
document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
})
  
// -------------------------------------------------------- 


// конец счетчик


// --- slider----------------------------------
    $('.people__slider').slick({	
        arrows: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/content/back.svg" alt="images"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/content/next.svg" alt="images"></button>',
        dots: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              infinite: true,
              dots: false,
              arrows: false,
              autoplay: true
            }
          },
            {
              breakpoint: 860,
              settings: {
                infinite: true,
                dots: false,
                arrows: false,
                autoplay: true
              }
            }
        ]
      });

// --------------------------------------------------------
   
// --footer--------------------------------------
    $('.footer__btn').on('click', function(){
      // $('.footer__btn').addClass('footer__btn--active');
    $('.footer__info-box').slideToggle('');
    $('.footer__btn-images').rotate({animateTo:180});
    });

    
//------------- меню бургер----------------------------------------
    const menuBtn = document.querySelector('.header__btn');
    const menuList = document.querySelector('.header__list');
    
    if(menuBtn) {
      
      menuBtn.addEventListener('click', function(event){
         document.body.classList.toggle('_lock');
         menuBtn.classList.toggle('active');
         menuList.classList.toggle('active');
      })
    }
    
// -----------------------------------------------------------------


 // --------------------------------------------------------    
   
      new WOW().init();



	// portfolio
    var mixer = mixitup('.portfolio__items');	
 // --------------------------------------------------------   


});

// header__item-link--active