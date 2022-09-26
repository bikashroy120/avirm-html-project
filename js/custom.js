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
    $("#img1").addClass("active");
    $("#img2").removeClass("active");
    $("#img3").removeClass("active");
  });
  $("#img2").click(function () {
    $("#img1").removeClass("active");
    $("#img2").addClass("active");
    $("#img3").removeClass("active");
  });
  $("#img3").click(function () {
    $("#img1").removeClass("active");
    $("#img2").removeClass("active");
    $("#img3").addClass("active");
  });
});
