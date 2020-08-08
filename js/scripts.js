(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.fixed-top',
        offset: 60
    });

    new WOW().init();
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('#collapsingNavbar li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggler:visible').click();
    });

/*    stickyFooter();

    $(window).scroll(stickyFooter).resize(stickyFooter);*/

})(jQuery);

function stickyFooter(){
    document_height = $(document).height();
    document_scrollTop = $(document).scrollTop();
    window_height = $(window).height();
    footer_height = $("footer").height();

    gap = document_height - footer_height - window_height;
    bottom = document_scrollTop - gap;

    if(document_scrollTop > gap){
        $("footer").css("bottom", bottom+"px");
    } else{
        $("footer").css("bottom","0");
    }
}