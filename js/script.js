var preloader = document.querySelector("#preloader");


$(document).ready(function(){
    // ---preloader---
    window.addEventListener("load", function(){
        this.setTimeout(function(){
            preloader.style.display = "none";
        },5000)
    })




    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
    });
    $('.screen_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        autoplay: true,
        arrows: false,
        cssEase: 'linear'
    });
    new VenoBox({
        spinner: 'wave',
    });
})