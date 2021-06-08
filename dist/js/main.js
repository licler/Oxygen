$(function(){
	
	var Animation = function() {
        var hFrom = $(window).scrollTop();
        var hTo = $(window).scrollTop() + ($(window).height() / 3);
        if ($(".numpage__items").offset().top > hFrom && $(".numpage__items").offset().top < hTo){
            $('.numpage__item-num span').delay(500).spincrement({
                thousandSeparator: "",
                duration: 3000
            });
        }
    };
    $(window).scroll(function() {
        Animation();
    });
    Animation();














	
    var mixer = mixitup('.portfolio__items',{
        animation: {
            effects: 'fade translateX(100%)',
            reverseOut: true,
            nudge: false 
        }

    });	
    
});