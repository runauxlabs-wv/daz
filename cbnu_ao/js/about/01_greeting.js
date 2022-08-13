$(document).ready(function () {

    // nav
    // =========================== //

    $("header nav ul.gnb>li").hover(function () {
        $("ul.sub, .sub_col").stop().slideDown();
        $(".sub_bg_bg").stop().show();


    }, function () {
        $("ul.sub, .sub_col").stop().slideUp();
        $(".sub_bg_bg").stop().hide();

    });



    // scroll top 버튼
    // =========================== //
    $(".top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });





}); //ready