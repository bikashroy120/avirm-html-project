$(document).ready(function () {
  $(".menu ul li a").click(function () {
    $("html,body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      1000
    );

    return false;
  });

  // Start Humber Main Menu Icon Js
  $(".all-p-humber").click(function () {
    $(this).toggleClass("open");
  });
  //==== End Humber Main Menu Icon Js

  $(".all-p-humber").click(function () {
    $(".menu ul").slideToggle();
  });
  $(".menu ul li a").click(function () {
    $(".all-p-humber").removeClass("open");
  });
  $(".menu ul li a").click(function () {
    $(".menu ul").slideUp();
  });
  $("#img1").click(function () {
    var imageUrl = "../vendor/Images/11.png";
    $(".frotfilio").css("background-image", "url(" + imageUrl + ")");
  });
  $("#img2").click(function () {
    var imageUrl2 = "../vendor/Images/item-2.png";
    $(".frotfilio").css("background-image", "url(" + imageUrl2 + ")","");
  });
  $("#img3").click(function () {
    var imageUrl3 = "../vendor/Images/item-3.png";
    $(".frotfilio").css("background-image", "url(" + imageUrl3 + ")");
  });
});
