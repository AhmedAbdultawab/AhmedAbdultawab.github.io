

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
