/**
 * Created by Людмила on 14.04.2017.
 */
$( document ).ready(function() {
  $("[rel='tooltip']").tooltip();

  $('.workhidden').hover(
      function(){
        $(this).find('.caption').slideDown(250); //.fadeIn(250)
      },
      function(){
        $(this).find('.caption').slideUp(250); //.fadeOut(205)
      }
  );
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});