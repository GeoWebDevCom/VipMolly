$(document).ready(function() {
    
   //чат
    $(".change-name").click(function () {
        $(".change-name-block").slideToggle();
    });
    $(".close").click(function () {
        $(".change-name-block").hide();
    });
    //навигацыя по сайту
    $(".view-move").mPageScroll2id({
      scrollSpeed: 900,
      offset: 0
    });
    //меню
    $(".toggle-menu").click(function () {
        $(".main-menu").slideToggle();
        return false;
    });
    //smile
    $(".smile-but").click(function () {
        $(".smilesChoose").slideToggle();
    });

    //review rating
    $(".rating-box .rating-mask").click(function () {
        $(this).parents(".rating-box").find(".rating").removeClass("rating-1 rating-2 rating-3 rating-4 rating-5");
    });
    $(".rating-box .item-1").click(function () {
        $(this).parents(".rating-box").find(".rating").addClass("rating-1");
    });
    $(".rating-box .item-2").click(function () {
        $(this).parents(".rating-box").find(".rating").addClass("rating-2");
    });
    $(".rating-box .item-3").click(function () {
        $(this).parents(".rating-box").find(".rating").addClass("rating-3");
    });
    $(".rating-box .item-4").click(function () {
        $(this).parents(".rating-box").find(".rating").addClass("rating-4");
    });
    $(".rating-box .item-5").click(function () {
        $(this).parents(".rating-box").find(".rating").addClass("rating-5");
    });

    //carousel
    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        lazyLoad:true,
        center:true,
        mouseDrag: true,
        nav: true,
        navText: ["", ""],
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true
    });
        //nicescroll
       $(".text-container, .chat").niceScroll({
        cursorcolor: "#e67376",
        cursorwidth: "15px",
        cursorborder: "none",
        cursorborderradius: "none",
        horizrailenabled: false,
        background: "#e4e4e4"
    });

    //gallery
    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });

    //модалка

        $('.open-modal').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
        $(document).on('click', '.close-modal', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
        
 

    // Validation
    $.validate({
        validateOnBlur : true,
        scrollToTopOnError : false,
        validateOnEvent: true,
        modules: 'security'
    });

    //fixed chat
    if ($(window).width() >= 1200) {
        chatStart = $('.chat-container .chat-iframe').offset().top - 60;
        chatStop = $('.main').height() + chatStart - $('.chat-container .chat-iframe').height();

        $(window).scroll(function(){
            if (($(document).scrollTop() >= chatStart) && ($(document).scrollTop() < chatStop)) {
                $('.chat-container .chat-iframe').addClass('fixed');
            } else {
                $('.chat-container .chat-iframe').removeClass('fixed');
            }
            if ($(document).scrollTop() >= chatStop) {
                $('.chat-container .chat-iframe').addClass('active').css({'bottom': -chatStop});
            } else {
                $('.chat-container .chat-iframe').removeClass('active');
            }
        });
    }
});



 


   