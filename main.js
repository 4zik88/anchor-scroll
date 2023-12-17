$(document).ready(function () {
    /* Smooth scroll */
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }
    });
    
    /* Scrollspy */
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();

        var offset = 150;

        $('section').each(function () {
            var sectionTop = $(this).offset().top - offset;
            var sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                var sectionId = $(this).attr('id');
                $('nav a[href="#' + sectionId + '"]').addClass('active');
            } else {
                var sectionId = $(this).attr('id');
                $('nav a[href="#' + sectionId + '"]').removeClass('active');
            }
        });
    });
});
