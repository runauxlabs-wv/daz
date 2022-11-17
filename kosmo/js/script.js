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
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });

  // ====== accordion ===== //

  $(".bsn_type").click(function () {
    $(".bsn_type_con").stop().slideToggle();
  });

  $(".bsn_type").click(function () {
    $(".ico_arr").toggleClass("on");

    // $(this).toggleClass('on').siblings().removeClass('on');
  });

  // Tablet
  // =========================== //

  if ($(window).width() < 1440) {
    var swiper_02 = new Swiper(".mySwiper.swp_02", {
      slidesPerView: 4,
      spaceBetween: 0,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // Mobile
  // =========================== //

  if ($(window).width() < 744) {
    $("#m_btn").click(function () {
      // $(".nav_bg").stop().hide();
      $(".gnb").stop().slideToggle();
    });

    $("nav ul.gnb >li").hover(
      function () {
        $("ul.sub, .nav_bg").stop().hide();
        // $("ul.sub, .nav_bg").stop().show();
      },
      function () {
        $("ul.sub, .nav_bg").stop().hide();
        // $("ul.sub, .nav_bg").stop().hide();
      }
    );

    var swiper_02 = new Swiper(".mySwiper.swp_02", {
      slidesPerView: 3,
      spaceBetween: 20,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper_04 = new Swiper(".mySwiper.swp_04", {
      slidesPerView: 3,
      spaceBetween: 40,
      // slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    });
  }

  // scroll top 버튼
  // =========================== //
  $("#top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
}); //ready end
