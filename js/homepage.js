$(document).ready(function () {
    //load animations
    (function($, win) {
        $.fn.inViewport = function(cb) {
            return this.each(function(i,el) {
                function visPx(){
                    let elH = $(el).outerHeight(),
                        H = $(win).height(),
                        r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
                    return cb.call(el, Math.max(0, t>0? Math.min(elH, H-t) : (b<H?b:H)));
                }
                visPx();
                $(win).on("resize scroll", visPx);
            });
        };
    }(jQuery, window));

    $('.main-header-left').inViewport(function(px){
        if(px) $(this).addClass('animated fadeInLeft');
    });
    $('.main-header-right').inViewport(function(px){
        if(px) $(this).addClass('animated fadeInRight');
    });
    $('.down-arrow > img').inViewport(function(px){
        if(px) $(this).addClass('goDownANDfadeInUp');
    });
    $('.about-bottom').inViewport(function(px){
        if(px) $(this).addClass('animated fadeInUp');
    });
    $('.how-it-work-main > img').eq(0).inViewport(function(px){
        if(px) $(this).addClass('animated fadeInLeft');
    });
    $('.how-it-work-main > img').eq(1).inViewport(function(px){
        if(px) $(this).addClass('animated fadeInRight');
    });
    $('.how-it-work-main > img').eq(2).inViewport(function(px){
        if(px) $(this).addClass('animated fadeInLeft');
    });

    // icons slide
    let swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // down-arrow click
    let downArrow = document.querySelector('.down-arrow  img');
    downArrow.addEventListener('click', function () {
        $('html, body').animate({ scrollTop: $('#about').offset().top - 40 }, { duration: 1200, easing: 'easeInOutQuart' })
    })
});