$(document).ready(function () {

    // 모달 메뉴 열기 //
    $(".menu").click(function () {
        // $(".modal").show();
        $(".modal").fadeIn();
        $(".menu_bar").fadeOut();


    });


    // 모달 메뉴 닫기//
    $(".x_quit").click(function () {
        // $(".modal").hide();
        $(".modal").fadeOut();
        $(".menu_bar").fadeIn();

    });

    // // 캔 호버//
    // $(".can_box").hover(function () {
    //     $(".can").addClass('on').siblings().removeClass('on');


    // });



    // 섹션1 //
    $(".m_txt > li:first-child").click(function () {
        // $(".modal").hide();
        $(".modal").fadeOut();
        $(".menu_bar").fadeIn();

    });

    $(".m_txt > li:nth-child(2)").click(function () {
        // $(".modal").hide();
        $(".modal").fadeOut();
        $(".menu_bar").fadeIn();

    });

    $(".m_txt > li:nth-child(3)").click(function () {
        // $(".modal").hide();
        $(".modal").fadeOut();
        $(".menu_bar").fadeIn();

    });

    $(".m_txt > li:nth-child(4)").click(function () {
        // $(".modal").hide();
        $(".modal").fadeOut();
        $(".menu_bar").fadeIn();

    });

    $(".m_txt > li:last-child").click(function () {
        // $(".modal").hide();
        $(".modal").fadeOut();
        $(".menu_bar").fadeIn();

    });


    // <!-- Initialize Swiper -->

    var swiper = new Swiper(".mySwiper", {
        loop: true,

        slidesPerView: 3,
        spaceBetween: 30,
        // grabCursor: true,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
       
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
    });



}); //ready end