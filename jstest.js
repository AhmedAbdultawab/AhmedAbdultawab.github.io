$(window).bind("pageshow", function(event) {
    if (event.originalEvent.persisted) {
        console.log("reloaded page!");
        window.location.reload();
    }
});

$(document).ready(function () {

    $(window).scroll(function () {
      console.log($(this).scrollTop());
      let screen_height =  $('.screen').height() * 0.8;

      if ($(this).scrollTop() > screen_height*12) {
            $('.page_number').text(". . .");}
      else if ($(this).scrollTop() > screen_height*11) {
            $('.page_number').text("12");}
      else if ($(this).scrollTop() > screen_height*10) {
            $('.page_number').text("11");}
      else if ($(this).scrollTop() > screen_height*9) {
            $('.page_number').text("10");}
      else if ($(this).scrollTop() > screen_height*8) {
            $('.page_number').text("09");
      }else if ($(this).scrollTop() > screen_height*7) {
            $('.page_number').text("08");
      }else if ($(this).scrollTop() > screen_height*6) {
            $('.page_number').text("07");
      }else if ($(this).scrollTop() > screen_height*5) {
            $('.page_number').text("06");
      }else if ($(this).scrollTop() > screen_height*4) {
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
  var breadcrumb = document.getElementById('dynamic');
  var start_size = 30
  var end_size = 20
  var end_margin_left = 3
  var margin_top = 7
  var end_margin_top = 12

  if (breadcrumb == null){
    return;
  }


  if(breadcrumb.classList.contains('small')) {
    start_size = 27;
    end_size = 19;
    end_margin_left = -3.2;
    end_margin_top = 11;
  }

  if (scrollTop < 200) {
      fontsize = start_size;
      margin_left = 3
      rotate = 0
  } else if (scrollTop > 800) {
      fontsize = end_size;
      margin_left = end_margin_left
      margin_top = end_margin_top
      rotate = -90
  } else {
      fontsize = start_size - (start_size - end_size) * (((scrollTop - 200)) / 600);
      rotate = -90  * (((scrollTop - 200)) / 600);
      margin_left = end_margin_left  * (((scrollTop - 200)) / 600);
      margin_top = end_margin_top  * (((scrollTop - 200)) / 600);
  }


  if(breadcrumb.classList.contains('size-only')) {
    rotate = 0;}

  $('#dynamic').css({
      'font-size': fontsize + "px",
      'transform': "rotate(" +rotate + "deg)",
      'left': margin_left + "%",
      'top': margin_top + "%",
  });

})
