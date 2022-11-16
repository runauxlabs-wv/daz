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


  // ====== Nav ===== //

  $("nav ul.gnb >li").hover(
    function () {
      $("ul.sub, .nav_bg").stop().slideDown();
      // $("ul.sub, .nav_bg").stop().show();
    },
    function () {
      $("ul.sub, .nav_bg").stop().slideUp();
      // $("ul.sub, .nav_bg").stop().hide();
    }
  );

  // ====== Swiper ===== //

  var swiper_01 = new Swiper(".mySwiper.swp_01", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //   el: ".swiper-pagination",
    // },
  });

  var swiper_02 = new Swiper(".mySwiper.swp_02", {
    slidesPerView: 4,
    spaceBetween: 40,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });


  var swiper_04 = new Swiper(".mySwiper.swp_04", {
    slidesPerView: 5,
    spaceBetween: 40,
    // slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction : false,
      pauseOnMouseEnter : true,
    },
    
  });

  // ====== accordion ===== //



  $(".bsn_type").click(function () {

    $(".bsn_type_con").stop().slideToggle();
  

  });

  $(".bsn_type").click(function () {

    $(".ico_arr").toggleClass('on');

    // $(this).toggleClass('on').siblings().removeClass('on');

    
  });



  // Tablet
  // =========================== //

    if ($(window).width() < 1441) {

      var swiper_02 = new Swiper(".mySwiper.swp_02", {
        slidesPerView: 4,
        spaceBetween: 0,
    
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

      });

      


      // $("ul.gnb>li").click(function(){
      //     $(this).find("ul.sub").stop().slideToggle();
      
      // });


      // // 모바일메뉴 open/close
      // $(".menu_m").click(function () {
      //     $(".gnb_s, .sub_col, .menu_m_x").stop().addClass("on");
      //     $(".sub_bg_bg").show();
      //     $(".menu_m").hide();
      //     // .gnb에 on클래스 추가/삭제    
      // });
      // $(".menu_m_x").click(function () {
      //     $(".gnb_s, .sub_col, .menu_m_x").stop().removeClass("on");
      //     $(".menu_m").show();
      //     $(".sub_bg_bg").hide();


      //     // .gnb에 on클래스 추가/삭제
      // });



      // 모바일 메뉴 화살표 방향변경 

      // $("a .m_arr").click(function(){
      //     $("a .m_arr_u").addClass("on");

      //     $("a .m_arr").removeClass("on");

      // });
      
      // $("a .m_arr_u").click(function(){
      //     $("a .m_arr_u").removeClass("on");
      //     $("a .m_arr").addClass("on");

      // });

  };






  // scroll top 버튼
    // =========================== //
    $("#top").click(function () {
      $("html, body").animate({
          scrollTop: 0
      }, 1000);
  });




}); //ready end
