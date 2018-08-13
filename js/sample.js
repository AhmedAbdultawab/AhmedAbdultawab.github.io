
$('document').ready(function() {

  if (document.referrer == "http://ahmedsameh.me/selection.html"){
    console.log("i'm the referrer man");

  }

  AOS.init();
  $("#dropdown").hide();

//Bookmark control
  $(".bookmark").click(function() {
  console.log("yo");
  $("#dropdown").show();
  $(".bookmark").hide();
});

// ---------------------
//Modal for image popup

var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");

$('.myImg').click(function() {
  modal.style.display = "block";
  document.getElementById('bookmark').style.display = 'none';
  var newSrc = this.src;
  modalImg.attr('src', newSrc);
  captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// -------------------------


});
