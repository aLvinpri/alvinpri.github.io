(function () {

    // Smooth Scrolling
    $('.page-scroll').on('click', function (e) {

        // ambil isi href
        var tujuan = $(this).attr('href');
        // tangkap elemen ybs
        var elemenTujuan = $(tujuan);
        // console.log($(window).scrollTop());
        // $(window).scrollTop('elemenTujuan'.offset().top);
        // pindahkan scroll
        // $('html').scrollTop(elemenTujuan.offset().top - 50)

        // pindahkan scroll
        $('html').animate({
            scrollTop: elemenTujuan.offset().top - 50
        }, 1250, 'easeInOutExpo');

        e.preventDefault();

    });

    //Show about
    $(window).on('load', function () {
        $('.about-left').addClass('show');
        $('.about-right').addClass('show');
    });

    // paralax effect
    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();

        $('.jumbotron img').css({
            'transform': 'translate(0px, ' + wScroll / 4 + '%)'
        });

        $('.jumbotron h1').css({
            'transform': 'translate(0px, ' + wScroll / 1.1 + '%)'
        });

        $('.jumbotron p').css({
            'transform': 'translate(0px, ' + wScroll / 0.5 + '%)'
        });

        //Show portfolio
        if (wScroll > $('.portfolio').offset().top - 250) {
            $('.portfolio .img-thumbnail').each(function (i) {
                setTimeout(function () {
                    $('.portfolio .img-thumbnail').eq(i).addClass('show')
                }, 200 * (i + 1));
            });
        }
    });



})();