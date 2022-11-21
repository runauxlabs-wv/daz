$(document).ready(function () {
  // scroll top button
  // =========================== //

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#top").show();
    } else {
      $("#top").hide();
    }
  });

  $("#top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // Swiper menu
  // =========================== //

  var swiper = new Swiper(".mySwiper.swp_01", {
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 0,
    loop: true,

  });

  $(".swp_01_w > div.swp_01_s").click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
  });



});
