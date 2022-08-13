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



    // Google map
    // =========================== //


    // var map;

    // function myMap() {
    //   var seoul = { lat: 37.5642135 ,lng: 127.0016985 };
    //   map = new google.maps.Map( document.getElementById('#g_map'), {
    //       zoom: 12,
    //       center: seoul
    //     });
    
    //   new google.maps.Marker({
    //     position: seoul,
    //     map: map,
    //     label: "서울 중심 좌표"
    //   });
    // };

    // function myMap(){
    //     // 2-2. 구글 맵의 옵션 
    //     var mapOptions = { 
    //           // 지도의 중앙 위치 : 영국 런던
    //           center:new google.maps.LatLng(51.508742, -0.120850)
    //           // 줌 레벨 : 5
    //              , zoom:5
    //     };
        
    //     // 2. 구글 지도 생성(만들기)
    //     // var map = new google.maps.Map(맵캔버스, 맵옵션들 );
    //     var map = new google.maps.Map( 
    //            document.getElementById("g_map") 
    //           , mapOptions );
    //  }



    // scroll top 버튼
    // =========================== //
    $(".top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });




}); //ready