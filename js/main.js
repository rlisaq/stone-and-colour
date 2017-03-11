
$(document).ready(function(){

  // jQuery goes here

  $('.products-section').isotope({
    // options
    itemSelector: '.all-products',
    layoutMode: 'fitRows'
  });

  // Fixed navigation trigger

  // On scroll
  if ($('body.home')) {
    
    // Get height to top from latest section
    var heightToTop = $("#latest").offset().top;

    $(window).scroll(function(){
      // Trigger class when scrolled past latest section
      if ($(window).scrollTop() > (heightToTop - 50)){
         $('.top-banner').addClass('scrolled');
      } else {
        $('.top-banner').removeClass('scrolled');
      }
    });

  }

  // Animate scrolling
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

});
