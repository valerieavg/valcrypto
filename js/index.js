(function() {
    //Con el EFI aseguramos que el código se ejecute una sola vez.
    "use strict";
    //Al cargar la pagina
    barraF();
})
//Menu fijo
$(window).scroll(function() {
    barraF();
});
//Menu Responsive
$('.menu-movil').on('click', function() {
    $('.navegacion-principal').slideToggle(); //slideToggle pone hide() y show() con animación
    //console.log("Diste click")
});

function barraF() {
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var barraAltura = $('.barra').innerHeight() /* innerHeight() altura con padding y margin*/

    if (scroll > windowHeight) {
        $('.barra').addClass('fixed');
        $('body').css({ 'margin-top': barraAltura + 'px' });
    } else {
        $('.barra').removeClass('fixed');
        $('body').css({ 'margin-top': '0px' });
    }
}

jQuery(document).ready(function() {
  
  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});

 var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

 if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); // Change image every 2 seconds
}