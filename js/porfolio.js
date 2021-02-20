'use strict'



$( function (){

  // menú desplegable movil
  $('.hamburger').click(function () {
    $("#ListNav").toggleClass("show_list");
    $("#ListNav").fadeIn();
  });

  $('#ListNav a, #ListNav, .muestra').click(function(){
    $("#ListNav").removeClass("show_list");   
  });



  //navegación secciones
  $('#nav_lcm, #nav_about').click(function(){
    $('html, body').animate({
      scrollTop: $('#sc_about').offset().top - 70
    }, 30);
  });

  $('#nav_photo').click(function(){
    $('html, body').animate({
      scrollTop: $('#sc_photo').offset().top - 70
    }, 30);
  });

  $('#nav_illus').click(function(){
    $('html, body').animate({
      scrollTop: $('#sc_illus').offset().top - 70
    }, 30);
  });

  $('#nav_web').click(function(){
    $('html, body').animate({
      scrollTop: $('#sc_web').offset().top - 70
    }, 30);
  });

  $('#nav_contact').click(function(){
    $('html, body').animate({
      scrollTop: $('#sc_contact').offset().top - 70
    }, 30);
  });


});

