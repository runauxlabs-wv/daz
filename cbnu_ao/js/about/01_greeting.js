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

    // nav
    // =========================== //


    if ($(window).width() > 979) {
        $("header nav ul.gnb>li").hover(function () {
            $("ul.sub, .sub_col").stop().slideDown();
            $(".sub_bg_bg").stop().show();


        }, function () {
            $("ul.sub, .sub_col").stop().slideUp();
            $(".sub_bg_bg").stop().hide();

        });
    };



    // mobile
    // =========================== //

    if ($(window).width() < 980) {


        $("ul.gnb>li").click(function () {
            $(this).find("ul.sub").stop().slideToggle();

        });


        // 모바일메뉴 open/close
        $(".menu_m").click(function () {
            $(".gnb_s, .sub_col, .menu_m_x").stop().addClass("on");
            $(".sub_bg_bg").show();

            $(".menu_m").hide();
            // .gnb에 on클래스 추가/삭제    
        });
        $(".menu_m_x").click(function () {
            $(".gnb_s, .sub_col, .menu_m_x").stop().removeClass("on");
            $(".menu_m").show();
            $(".sub_bg_bg").hide();


            // .gnb에 on클래스 추가/삭제
        });



        // 모바일 메뉴 화살표 방향변경 

        $("a .m_arr").click(function () {
            $("a .m_arr_u").addClass("on");

            $("a .m_arr").removeClass("on");

        });

        $("a .m_arr_u").click(function () {
            $("a .m_arr_u").removeClass("on");
            $("a .m_arr").addClass("on");

        });

    };



    // scroll top 버튼
    // =========================== //
    $(".top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });





}); //ready