
$(document).ready(function () {

    $(window).scroll(function () {
      console.log($(this).scrollTop());
      let screen_height =  $('.screen').height() * 0.8;

      if ($(this).scrollTop() > screen_height*4) {
            $('.page_number').text("05");
      } else if ($(this).scrollTop() > screen_height*3) {
              $('.page_number').text("04");
        } else if ($(this).scrollTop() > screen_height*2) {
            $('.page_number').text("03");
        }  else if ($(this).scrollTop() > screen_height) {
            $('.page_number').text("02");
        } else {
            $('.page_number').text("01");
        };
    });
});


$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop < 200) {
      fontsize = 30;
      rotate = 0
  } else if (scrollTop > 800) {
      fontsize = 20;
      rotate = -90
  } else {
      fontsize = 30 - 10 * (((scrollTop - 200)) / 600);
      rotate = -90  * (((scrollTop - 200)) / 600);
  }

  var breadcrumb = document.getElementById('dynamic');
  if(breadcrumb.classList.contains('size-only')) {
    rotate = 0;}

  $('#dynamic').css({
      'font-size': fontsize + "px",
      'transform': "rotate(" +rotate + "deg)"
  });
})
