$(".nav-link").on('click', function (e) {

    if (this.hash !== "") {
        e.preventDefault();

        let hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 99
        }, 1500, 'easeOutExpo')

        if (hash == "#s4") {
            $('html, body').animate({
                scrollTop: $(hash).offset().top + 100
            }, 1500, 'easeOutExpo')
        }
    }
})

$('.scrl-down').on('click', function () {
    $('html, body').animate({
        scrollTop: $('.s1').offset().top - 99
    }, 1500, 'easeOutExpo')
})

$('.scrl-up').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1500, 'easeOutExpo')
})

$('#btn-congrat').on('click', function () {
    $('#congrat').fadeIn("slow")
})

$(window).scroll(function () {
    let wSc = $(this).scrollTop();

    if (wSc <= $('.s1').offset().top - 150) {
        $('.bg-scrl-up').fadeOut(1000)
    }

    if (wSc > $('.s1').offset().top - 150) {
        $('.ill-big-s1').fadeIn(1000)
        $('.ill-bg-s1').fadeIn(1000)
        $('.content-1').animate({
            right: '0',
            opacity: 1
        }, 1000)
        $('.bg-scrl-up').fadeIn(1000)
    }

    if (wSc > $('.s2').offset().top - 150) {
        $('.ill-big-s2').fadeIn(1000)
        $('.ill-bg-s2').fadeIn(1000)
        $('.content-2').animate({
            left: '0',
            opacity: 1
        }, 1000)
    }

    if (wSc > $('.s3').offset().top - 150) {
        $('.ill-big-s3').fadeIn(1000)
        $('.ill-bg-s3').fadeIn(1000)
        $('.content-3').animate({
            right: '0',
            opacity: 1
        }, 1000)
    }

    if (wSc > $('.s4').offset().top - 700) {
        $('.tit-s4').slideDown(2500)
        $('.hrl-s4').animate({
            left: '0',
            opacity: 1
        }, 2500)
        $('.hrr-s4').animate({
            right: '0',
            opacity: 1
        }, 2500)
        $('.card-ill-1').slideDown(2500)
        $('.card-ill-2').slideDown(2500)
        $('.card-ill-3').slideDown(2500)
    }

})

$('#gl-t1').animate({
    left: '0',
    opacity: 1
}, 2000)