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


    var map;

    function initMap() {
      var seoul = { lat: 37.5642135 ,lng: 127.0016985 };
      map = new google.maps.Map( document.getElementById('#g_map'), {
          zoom: 12,
          center: seoul
        });
    
      new google.maps.Marker({
        position: seoul,
        map: map,
        label: "서울 중심 좌표"
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