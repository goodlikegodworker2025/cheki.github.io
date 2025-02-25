
$(document).ready(function () {

    // for top button

    $(".top").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1);
    });

    // for remove show class from the navbar-collapse when you click the menu 

    $("header .navbar-nav .nav-link").click(function () {
        $("header .navbar .show").removeClass("show");
    });

});

// for top button 

$(window).scroll(function () {

    if ($(this).scrollTop() >= 30) {
        $(".top").addClass("effect");
    }
    
    else {
        $(".top").removeClass("effect");
    }

});

// testimonial js start 

$('.testimonial-box').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><img src='assets/images/left-arrow.svg'/></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><img src='assets/images/right-arrow.svg'/></button>"
  }); 

// testimonial js end