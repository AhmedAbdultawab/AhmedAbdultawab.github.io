$(document).ready(function () {

    $(window).scroll(function () {
      console.log($(this).scrollTop());

        if ($(this).scrollTop() > 50) {
            $('.page_number').text("02")
            ()
        } else {
            $('.page_number').text("01")
        }
    });
});
