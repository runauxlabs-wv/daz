$(document).ready(function () {


    //리사이징 할때마다 새로고침
    // var lastWidth = $(window).width();
    // $(window).resize(function () {
    //     if ($(window).width() != lastWidth) {
    //         location.reload();
    //         lastWidth = $(window).width();
    //         return false;
    //     }
    // });



    // nav
    // =========================== //

    $("header nav ul.gnb>li").hover(function () {
        $("ul.sub, .sub_col").stop().slideDown();
        $(".sub_bg_bg").stop().show();


    }, function () {
        $("ul.sub, .sub_col").stop().slideUp();
        $(".sub_bg_bg").stop().hide();

    });



    // nav_snb_on
    // =========================== //

    // $("#snb01 > li").click(function () {

    //     // $("a.abt").removeClass("on");

    //     $(this).addClass("on");
    //     $(this).siblings().removeClass("on");

    //     $("a.abt").addClass("on");
    //     $("a.std, a.glr, a.sit").removeClass("on");

    // });

    

    // nav_gnb_on
    // =========================== //

    // $("a.abt").click(function () {

    //     $("a.abt").addClass("on");
    //     $("#snb01 > li:nth-child(1)").addClass("on");
    //     $("#snb01 > li:nth-child(1)").siblings().removeClass("on");


    //     $("a.std, a.glr, a.sit").removeClass("on");

    // });




    // scroll top 버튼
    // =========================== //
    // $(".top").click(function () {
    //     $("html, body").animate({
    //         scrollTop: 0
    //     }, 1000);
    // });


}); //ready end