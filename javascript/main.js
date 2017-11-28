Tippmate = {};

Tippmate.page = function() {
  transition_duration = 300;
  
  $('html').removeClass('no-js');
  $('html').addClass('js');
  
  
  
  
  $('.mobile-nav-toggle__show').click(function(e) {
    showMobileNav(this);
  });
  $('.mobile-nav-toggle__hide').click(function(e) {
    hideMobileNav(this);
  });
  
  $('.mobile-nav__sub-toggle').click(function(e) {
    showMobileSubNav(this);
  });
  
  showMobileNav = function(trigger) {
    $(trigger).fadeOut(transition_duration);
    $('.mobile-nav-toggle__hide').fadeIn(transition_duration);
    $('.mobile-nav').fadeIn(transition_duration);
    $('.mobile-nav .mobile-nav__item').each(function(index) {
      $(this).delay((index+1)*transition_duration/2.5).css('opacity',0).animate({'opacity': 1}, transition_duration/1.5);;
    });
  };
  
  hideMobileNav = function(trigger) {
    $(trigger).fadeOut(transition_duration);
    $('.mobile-nav-toggle__show').fadeIn(transition_duration);
    $('.mobile-nav').fadeOut(transition_duration);
  };
  
  showMobileSubNav = function(trigger) {
    var last = $('.mobile-nav__sub-toggle--expanded');
    last.removeClass('mobile-nav__sub-toggle--expanded').next().slideUp();
    console.log(last[0]);
    console.log($(trigger)[0]);
    if ($(trigger)[0] != last[0]) {
      $(trigger).addClass('mobile-nav__sub-toggle--expanded');
      // if ($(trigger).hasClass('mobile-nav__sub-toggle--expanded')) {
        $(trigger).next().slideDown();
      // } else {
      //   $(trigger).next().slideUp();
      // }
    }
  };
  
  
  showMobileNav($('.mobile-nav-toggle__show')[0]);
};