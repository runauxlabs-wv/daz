$(document).ready(function () {

    //------------sec1로 스크롤 이동 버튼 ----//

    $(".gnb > li:first-child").each(function () {
        var sec1 = $("." + $(this).data('id')).offset().top;


        $(this).click(function () {
            $("html, body").animate({
                scrollTop: sec1
            }, 1000);
            $(this).addClass('on');
        });
    });


    //------------sec2로 스크롤 이동 버튼 ----//

    $(".gnb > li:nth-child(2)").each(function () {
        var sec2 = $("." + $(this).data('id')).offset().top;


        $(this).click(function () {
            $("html, body").animate({
                scrollTop: sec2
            }, 1000);
            $(this).addClass('on');
        });
    });


    //------------sec3로 스크롤 이동 버튼 ----//

    $(".gnb > li:nth-child(3)").each(function () {
        var sec3 = $("." + $(this).data('id')).offset().top;


        $(this).click(function () {
            $("html, body").animate({
                scrollTop: sec3
            }, 1000);
            $(this).addClass('on');
        });
    });

    //------------sec4로 스크롤 이동 버튼 ----//


    $(".gnb > li:last-child").each(function () {
        var sec4 = $("." + $(this).data('id')).offset().top;


        $(this).click(function () {
            $("html, body").animate({
                scrollTop: sec4
            }, 1000);
            $(this).addClass('on');
        });
    });

    //------------heart ----//

    // $(".sns a:nth-child(1)").mouseover(function() {
    //     $(".sns a:nth-child(1) span").addClass('.sns_none').siblings().removeClass('.sns_none');


    // });


    //------------스와이퍼 ----//

    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            // type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        allowTouchMove :false,
    });


});