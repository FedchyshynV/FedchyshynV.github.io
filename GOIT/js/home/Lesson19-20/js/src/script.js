"function"!==typeof Object.create&&(Object.create=function(f){function g(){}g.prototype=f;return new g});
$(function() {

  $('.banner__tab').eq(0).siblings('.banner__text').show();
  $('.banner__tab').eq(0).addClass('banner__tab--active');
  $('.banner__tab').eq(0).children('.banner__title').addClass('banner__title--active');

  $('.banner__tab').on('click', function() {
    $('.banner__text').slideUp('medium');
    $('.banner__tab').removeClass('banner__tab--active');
    $('.banner__title').removeClass('banner__title--active');

    $(this).siblings('.banner__text').slideToggle('medium');
    $(this).toggleClass('banner__tab--active');
    $(this).children('.banner__title').toggleClass('banner__title--active');
  });

  

});

