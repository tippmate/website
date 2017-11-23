Tippmate = {};

Tippmate.page = function() {
  transition_duration = 300;
  
  $('html').removeClass('no-js');
  $('html').addClass('js');
  
  
  $('.mobile-nav-toggle__show').click(function(e) {
    $(this).fadeOut(transition_duration);
    $('.mobile-nav-toggle__hide').fadeIn(transition_duration);
    $('.mobile-nav').fadeIn(transition_duration);
    $('.mobile-nav .mobile-nav__item').each(function(index) {
      $(this).delay((index+1)*transition_duration/2.5).css('opacity',0).animate({'opacity': 1}, transition_duration/1.5);;
    });
  })
  $('.mobile-nav-toggle__hide').click(function(e) {
    $(this).fadeOut(transition_duration);
    $('.mobile-nav-toggle__show').fadeIn(transition_duration);
    $('.mobile-nav').fadeOut(transition_duration);
  })
};