$("#gayab").click(function(){

  $("#gayab").hide();

})

$("#wapas").click(function(){

  $("#gayab").fadeIn(500);
})
$(window).scroll(function(){

var wScroll = $(this).scrollTop();

$('.logo').css({
	'transform' : 'translate(0px, -'+ wScroll /20 +'%)'

});

$(".darkLogos").css({
	'transform' : 'translate(0px, '+ wScroll /4 +'%)'

});

$(".darkLogos2").css({
	'transform' : 'translate(0px, -'+ wScroll /4 +'%)'

});


//Floating Text

   if(wScroll > $('.textFlo').offset().top - ($(window).height() / 1.5) ) {  

$('.textFlo article').addClass('showing');}


//Floating Elements

if(wScroll > $('.courseCon').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.courseCon').offset().top +$(window).height() - 350)).toFixed();

    $('.course1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.course3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
  
  
  //Landing Elements
   if(wScroll > $('.touchAni').offset().top - 200) {

    $('.work figure').each(function(i){

      setTimeout(function(){
        $('.work figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });

  }
 if(wScroll > $('.whyIc').offset().top - 200) 
{


$(".testStu").css({
  'transition' : 'transform 2s ease', 'transform' : 'translateY(0px)'
});


}

if(wScroll > $('.whyIc').offset().top - 200) 
{


$(".callOut").css({
  'transition' : 'transform 2s ease', 'transform' : 'translateX(0px)'
});


}

if(wScroll > $('footer').offset().top - $(window).height()){
$(".conForm").css({
  'transition' : 'transform 2s ease', 'transform' : 'translateX(0px)'
});

$(".addCir").css({
  'transition' : 'transform 2s ease', 'transform' : 'translateX(0px)'
})

}

});


// ------------------------------------Skills Page --------------------------------------
(function()
{
  var abc=$('dd')
  abc.filter(':nth-child(n+4)').addClass('hide');
  $('dt').on('mouseenter',function(){
    $(this)
    .next()
    .slideDown(500)
    .siblings('dd')
    .slideUp(500);
  })
})
();

$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});


