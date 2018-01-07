Tippmate = {};

Tippmate.page = function() {
  transition_duration = 300;
  
  $('html').removeClass('no-js');
  $('html').addClass('js');
  
  
  
  $nav__subs = $('.nav__sub');
  
  $('.nav__sub').each(function(e) {
    var $nav__sub = $(this);
    var timeout;
    var $nav__trigger = $nav__sub.prev('.nav__item-link');
    $nav__trigger.on({
      'mouseover': function() {
        clearTimeout(timeout);
        $nav__subs.hide();
        $nav__sub.fadeIn(transition_duration);
      },
      'mouseout': function() {
        timeout = setTimeout(function() {
          $nav__sub.fadeOut();
        }, 400);
      }
    });
    
    $nav__sub.on({
      'mouseover': function() {
        clearTimeout(timeout);
      },
      'mouseout': function() {
        timeout = setTimeout(function() {
          $nav__sub.fadeOut();
        }, 400)
      }
    })
    
    // $nav__trigger.on('mouse')
  });
  
  
  
  
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
    if ($(trigger)[0] != last[0]) {
      $(trigger).addClass('mobile-nav__sub-toggle--expanded');
        $(trigger).next().slideDown();
    }
  };
  
  var header_shadow = false;
  var headerPos = function() {
    var top_pos = window.pageYOffset;
    if (top_pos > 20 && header_shadow == false) {
      $('.header').addClass('header--shadow');
      header_shadow = true;
    } else if (top_pos <= 20 && header_shadow == true) {
      $('.header').removeClass('header--shadow');
      header_shadow = false;
    }
    // p_bg0.style.transform = 'translate(0, '+(-top_pos)+'px)';
    window.requestAnimationFrame(headerPos);
  };
  headerPos();
  
  
  // showMobileNav($('.mobile-nav-toggle__show')[0]);
  
  
  
  
  
  $(".glide").glide({
    type: "carousel"
  });
};