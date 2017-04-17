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
  $('.owl-carousel').owlCarousel({
    loop:true,
    nav: true,
    navText: ['<i class=" fa fa-chevron-left"></i>','<i class=" fa fa-chevron-right"></i>'],
    responsiveClass:true,
    pagination: true,
    autoplay: true,
    autoplayTimeout: 4000,
    items: 1
  });
});

/*
/!*vdfbhfgh   *!/
$(document).ready(function(){
  var o=$(".js-owl-testimonials");
  o.on("initialized.owl.carousel",function(){
    $(".testimonials_group").removeClass("hidden"),
        $(".testimonials .loader").addClass("is-hidden")
  }),
  o.length&&o.owlCarousel({
    items:1,nav:!0,dots:!1,loop:!0})});*/
