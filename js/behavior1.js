$("#gayab").click(function(){

  $("#gayab").hide();

})

$("#wapas").click(function(){

  $("#gayab").fadeIn(500);
})
// ------------------------------------Skills Page --------------------------------------

 $(document).ready(function() {
    $("#datepicker").datepicker();
  });


(function(){
$('dd').addClass("hide");
$('dl').on('mouseenter', 'dt', function(){
$(this)
      .next()
            .slideDown(500)
            .removeClass("hide")
            .siblings("dd")
            .slideUp(500);


});
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

})();


