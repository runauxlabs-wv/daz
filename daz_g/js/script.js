$(document).ready(function () {


    //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function () {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });


    //------------sec1로 스크롤 이동 버튼 ----//

    $(".menu > li:first-child").each(function () {
        var sec1 = $("." + $(this).data('id')).offset().top;


        $(this).click(function () {
            $("html, body").animate({
                scrollTop: sec1
            }, 1000);
            $(this).addClass('on');
        });
    });


    //------------sec2로 스크롤 이동 버튼 ----//

    $(".menu > li:nth-child(2)").each(function () {
        var sec2 = $("." + $(this).data('id')).offset().top;


        $(this).click(function () {
            $("html, body").animate({
                scrollTop: sec2
            }, 1000);
            $(this).addClass('on');
        });
    });


    //------------sec3로 스크롤 이동 버튼 ----//

    $(".menu > li:nth-child(3)").each(function () {
        var sec3 = $("." + $(this).data('id')).offset().top;


        $(this).click(function () {
            $("html, body").animate({
                scrollTop: sec3
            }, 1000);
            $(this).addClass('on');
        });
    });

    //------------sec4로 스크롤 이동 버튼 ----//


    $(".menu > li:last-child").each(function () {
        var sec4 = $("." + $(this).data('id')).offset().top;


        $(this).click(function () {
            $("html, body").animate({
                scrollTop: sec4
            }, 1000);
            $(this).addClass('on');
        });
    });




    /* Lightbox Luminous */

    new LuminousGallery(document.querySelectorAll('.grid-gallery'), {}, {
        caption: function (trigger) {
            return trigger.querySelector('img').getAttribute('alt');
        }
    });


    /* Fadeup Animation AOS */
    // AOS.init();
    AOS.init({
        duration: 1000
    });


    // scroll top 버튼
    // =========================== //
    $(".top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });





}); //ready end
