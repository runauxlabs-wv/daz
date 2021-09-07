$(document).ready(function() {

// 자바스크립트때매 병걸릴것같아


//리사이징 할때마다 새로고침
// var lastWidth = $(window).width();
//     $(window).resize(function() {
//         if ($(window).width() != lastWidth) {
//             location.reload();
//             lastWidth = $(window).width();
//             return false;
//         }
//     });


//------------sec1로 스크롤 이동 버튼 ----//

$(".gnb > li:first-child").each(function() {
    var section1 = $("." + $(this).data('id')).offset().top;
    

    $(this).click(function() {
        $("html, body").animate({
            scrollTop: section1
        }, 1000);
        $(this).addClass('on');
    });
});


//------------sec2로 스크롤 이동 버튼 ----//

$(".bg_t span, .gnb > li:nth-child(2)").each(function() {
    var thisOffset0 = $("." + $(this).data('id')).offset().top;
    

    $(this).click(function() {
        $("html, body").animate({
            scrollTop: thisOffset0
        }, 1000);
        $(this).addClass('on');
    });
});


//------------sec3로 스크롤 이동 버튼 ----//

$(".gnb > li:last-child").each(function() {
    var section1 = $("." + $(this).data('id')).offset().top;
    

    $(this).click(function() {
        $("html, body").animate({
            scrollTop: section1
        }, 1000);
        $(this).addClass('on');
    });
});



// =================섹션1 탭 ======================= //

// 탭메뉴 세로형

    $(".tabV ul li").click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
    });


    // //여기 적음
    // $(".yzrs").on(function(){
    //     $(this).addClass('on').siblings().removeClass('on');
    //     $("." + $(this).data('class')).addClass('on').siblings().removeClass('on');
    // });


// 이건 히스토리 스와이프 - 센터 //0906 분기 수정

var swiper = new Swiper(".hisSwiper", {
    slidesPerView: 1, //현재페이지에서 보이는 숫자인가봐 
    spaceBetween: 0, //이거 수정할그야
    centeredSlides: false,
    
    pagination: {
        el: ".swiper-pagination",
        type : 'fraction'
    },

    observer: true,
    observeParents: true, //이거 두개 리프레시?

    grabCursor: true,

    breakpoints: {
        // when window width is >= 640px //640이랑 같거나 크다 (큰페이지)
        640: {
            slidesPerView: 4, // 기본값 4
            centeredSlides: true,

            pagination: {
                el: ".swiper-pagination",
                type : 'bullets',

                dynamicBullets: true, // 이거 추가햇어
                clickable: true,
            }, //여기 왜인지 네비가 안먹음 

        }
    },

});


// ================섹션2 탭======================== //


  // 탭메뉴 가로형
  $(".tab ul li").click(function() {
      $(this).addClass('on')
          .siblings().removeClass('on');
      $("#" + $(this).data('id')).addClass('on')
          .siblings().removeClass('on');
     
  });

//   교수님짱 (아래) - 애니메이션 시간차를 위해

  $(".tab ul li:nth-child(2)").click(function() {
    $("#" + $(this).data('id')).addClass('on')
          .siblings().removeClass('on');
          
          setTimeout(function() {
            $(".sugarz").addClass('on');
        }, 300);
    
  });


//   ㅡㅡㅡ밸1 ) 가치관 ) 떰 + + 페이드ㅡㅡㅡ //

var val_swiper = new Swiper(".con1Swiper", {
  // loop: true, //얘가 짤짤이 썸넬이엇음
  slidesPerView: 3,
  spaceBetween: 5,
  freeMode: {
    enabled: true,
},
watchSlidesProgress: true,
  loopFillGroupWithBlank: true,

//   observer: true,
//   observeParents: true,
});
var val_swiper2 = new Swiper(".con1Swiper2", {
  loop: true,
  effect: "fade",
  // spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
  thumbs: {
    swiper: val_swiper,
    slideThumbActiveClass :'swiper-slide-thumb-active',
  },
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },

//   observer: true,
//   observeParents: true, //갱신
});



//   ㅡㅡㅡ밸 2 mapㅡㅡㅡ // 0831
// 일케적는거 맞나..되면 좋겟다. // 이거 each로 어케바꿔



$(".map_icon a:first-child").click(function() {
    $(".map div:first-child, .map_icon a:first-child").addClass('on').siblings().removeClass('on');
    return false;

});

$(".map_icon a:nth-child(2)").click(function() {
    $(".map div:nth-child(2), .map_icon a:nth-child(2)").addClass('on').siblings().removeClass('on');
    return false;

});

$(".map_icon a:nth-child(3)").click(function() {
    $(".map div:nth-child(3), .map_icon a:nth-child(3)").addClass('on').siblings().removeClass('on');
    return false;

});

$(".map_icon a:nth-child(4)").click(function() {
    $(".map div:nth-child(4),.map_icon a:nth-child(4)").addClass('on').siblings().removeClass('on');
    return false;

});

$(".map_icon a:nth-child(5)").click(function() {
    $(".map div:nth-child(5),.map_icon a:nth-child(5)").addClass('on').siblings().removeClass('on');
    return false;

});

// $(".map div span").each(function(){
//     setTimeout(function() {
//         $(".sugarz span").addClass('on');
//     }, 1000);
// });




  
//   ㅡㅡㅡ밸 2 카운팅ㅡㅡㅡ // 0830 교수님..짱 

// 3자리마다 ,콤마찍는 함수
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// 정수카운팅
function counting() {
    $('.map_count span').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        //시작 숫자와 종료숫자를 비교한다    
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
        }, {
            duration: 3000,
            easing: 'linear',
            step: function() {
                const thisNum = numberWithCommas(Math.floor(this.countNum));
                $this.text(thisNum);
            },
            complete: function() {
                const thisNum = numberWithCommas(Math.floor(this.countNum));
                $this.text(thisNum);
            }
        });
    });

}


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 갱신 



    // val_swiper.update();
    $("ul.tab_val li").click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
        val_swiper.update();
        val_swiper2.update();
        soc_swiper.update();
       
        counting();
    });




// ㅡㅡㅡㅡㅡ 무한루프 + 오토 ㅡㅡㅡㅡㅡ //

// con3_사회활동 스와이프 // 

var soc_swiper = new Swiper(".valSwiper", {
  slidesPerView: 3,
//   spaceBetween: 30,
  // slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
//   navigation: {
//     nextEl: ".valSwiper .swiper-button-next",
//     prevEl: ".valSwiper .swiper-button-prev",
//   },
  // centeredSlides: true,
  autoplay: {
    delay: 2800,
    disableOnInteraction: false,
  },
//   observer: true,
//   observeParents: true, //갱신 해줘야징

grabCursor: true,

});



// ============== 탭메뉴 가로형2 ================== //


  
  $(".tab2 ul li").click(function() {
      $(this).addClass('on')
          .siblings().removeClass('on');
      $("#" + $(this).data('id')).addClass('on')
          .siblings().removeClass('on');
  });



//   ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ




 // 아이스크림 썸갤러리 루프   //변수선언할때 변수명 안겹치게!

 const swiper2_1 = new Swiper(".menuSwiper", {
    effect: "coverflow",
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 230,
        modifier: 1,
        slideShadows: false
    },
    navigation: {
        nextEl: ".expSwiper .swiper-button-next",
        prevEl: ".expSwiper .swiper-button-prev"
    },
    allowTouchMove: false,
    simulateTouch : false,
});
swiper2_2 = new Swiper(".expSwiper", {
    loop: true,
    navigation: {
        nextEl: ".expSwiper .swiper-button-next",
        prevEl: ".expSwiper .swiper-button-prev",
    },
    thumbs: {
        swiper: swiper2_1,
        slideThumbActiveClass: ".menuSwiper .swiper-slide.swiper-slide-active"
    },
    pagination: {
        el: ".expSwiper .swiper-pagination",
        dynamicBullets: true,
    },
    allowTouchMove: false
    
});


  // ㅡㅡㅡ //

  const swiper3_1 = new Swiper(".menuSwiper2", {
      
    effect: "coverflow",
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 230,
        modifier: 1,
        slideShadows: false
    },
    navigation: {
        nextEl: ".expSwiper2 .swiper-button-next",
        prevEl: ".expSwiper2 .swiper-button-prev"
    },
    allowTouchMove: false,
    simulateTouch : false
   
  });
swiper3_2 = new Swiper(".expSwiper2", {
    loop: true,
    navigation: {
        nextEl: ".expSwiper2 .swiper-button-next",
        prevEl: ".expSwiper2 .swiper-button-prev",
    },
    thumbs: {
        swiper: swiper3_1,
        slideThumbActiveClass: ".menuSwiper2 .swiper-slide.swiper-slide-active"
    },
    pagination: {
        el: ".expSwiper2 .swiper-pagination",
        dynamicBullets: true,
    },
    allowTouchMove: false
  }); 


  // ㅡㅡㅡ //

  const swiper4_1 = new Swiper(".menuSwiper3", {
    
    effect: "coverflow",
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 230,
        modifier: 1,
        slideShadows: false
    },
    navigation: {
        nextEl: ".expSwiper3 .swiper-button-next",
        prevEl: ".expSwiper3 .swiper-button-prev"
    },
    allowTouchMove: false,
    simulateTouch : false
    
  });
 swiper4_2 = new Swiper(".expSwiper3", {
    loop: true,
    navigation: {
        nextEl: ".expSwiper3 .swiper-button-next",
        prevEl: ".expSwiper3 .swiper-button-prev",
    },
    thumbs: {
        swiper: swiper4_1,
        slideThumbActiveClass: ".menuSwiper3 .swiper-slide.swiper-slide-active"
    },
    pagination: {
        el: ".expSwiper3 .swiper-pagination",
        dynamicBullets: true,
    },
    allowTouchMove: false

  }); 




  // opacity tab에서 update swiper
$(function() {
    swiper2_1.update();
    swiper2_2.update();

    $("ul.tab > li").click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
        // 클릭이벤트 후에 swiper 새로고침(thumbgallery전용, 다른 스와이퍼는 obsever로 해결가능)
        swiper2_1.update();
        swiper2_2.update();
        swiper3_1.update();
        swiper3_2.update();
        swiper4_1.update();
        swiper4_2.update();
});
});



//-----------------------------스크롤 버튼

  $(".scroll span").each(function() {
    var thisOffset = $("." + $(this).data('id')).offset().top;

    $(this).click(function() {
        $("html, body").animate({
            scrollTop: thisOffset
        }, 1000);
        $(this).addClass('on').siblings().removeClass('on');
    });
});

// ㅡㅡㅡㅡㅡㅡ그냥 써보는거 ㅡㅡㅡㅡ0830

// $(document).scroll(function() {
//     var bg_bottom = $(window).scrollTop();
//     $(".scroll .main").each(function() {
//         if (bg_bottom > 1080) {
//             $(".scroll .main").removeClass('on');
//          } // else if (bg_bottom < 1080) {
//         //     $(".scroll .main").addClass('on');
//         // }
//     });
// });



//-----------------------------스크롤 top 버튼
$(".t_scroll span").each(function() {
    var thisOffset_t = $("." + $(this).data('id')).offset().top;
    

    $(this).click(function() {
        $("html, body").animate({
            scrollTop: thisOffset_t
        }, 1000);
        $(this).addClass('on');
    });
});

// ======================== 푸터 =====================//

$(".f_menu a").click(function() {
    return false;
    //이동 막아둠 
});



});
