var main = function() {
  /* Push the nav over by 200px over and hide 'menu' */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 300);
	$(".xyz").hide(300);
  }); 
  
   /* Then push them back nav*/
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-200px"
    }, 300);
	$(".xyz").show(300);
  });
};

$(document).ready(main);
