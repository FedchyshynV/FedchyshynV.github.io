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

  $("#owl-example").owlCarousel({
    // Most important owl features
        singleItem : true,
        itemsScaleUp : false,

        //Basic Speeds
        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        //Autoplay
        autoPlay : true,
        stopOnHover : false,

        // Navigation
        navigation : false,
        navigationText : ["prev","next"],
        rewindNav : true,
        scrollPerPage : false,

        //Pagination
        pagination : true,
        paginationNumbers: false,

        // Responsive
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window,

        // CSS Styles
        baseClass : "owl-carousel",
        theme : "owl-theme",

        //Lazy load
        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",

        //Auto height
        autoHeight : false,

        //JSON
        jsonPath : false,
        jsonSuccess : false,

        //Mouse Events
        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,

        //Transitions
        transitionStyle : false,

        // Other
        addClassActive : false,

        //Callbacks
        beforeUpdate : false,
        afterUpdate : false,
        beforeInit: false,
        afterInit: false,
        beforeMove: false,
        afterMove: false,
        afterAction: false,
        startDragging : false,
        afterLazyLoad : false
  });

});

