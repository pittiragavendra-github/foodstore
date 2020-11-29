$(document).ready(function () {
  /* For the sticky navigation */
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("stickey");
      } else {
        $("nav").removeClass("stickey");
      }
    },
    {
      offset: "60px;",
    }
  );

  /* scroll buttons*/

  $(".js--scroll-to-plans").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });
  $(".js--scroll-to-features").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  /* Animation Effects using Animate css framework*/

  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass(
        "animate__animated , animated animate__fadeInDown"
      );
    },
    {
      offset: "50%;",
    }
  );
  $(".app-screen").waypoint(
    function (direction) {
      $(".app-screen").addClass("animate__animated , animate__rollIn");
    },
    {
      offset: "50%;",
    }
  );

  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animate__animated , animate__lightSpeedInLeft");
    },
    {
      offset: "50%;",
    }
  );

  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animate__animated , animate__flipInY");
    },
    {
      offset: "50%;",
    }
  );

  /* responsive navigation  */

  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    nav.slideToggle(200);
    var icon = $(".js--nav-icon i");

    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }
  });
});
