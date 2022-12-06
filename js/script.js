var preloader = document .getElementById('loader-wrapper');

function myfunction() {
  preloader.style.display ='none'
}

$("nav .sea").click(function () {
  $(".search-box").slideToggle();
});

$("nav .bar").click(function () {
  $(".side-bar").addClass("right");
});
$("#slide .close").click(function () {
  $(".side-bar").removeClass("right");
});

$("#banner .banner-main").slick({
  prevArrow: '<i class="fas fa-chevron-left prev"></i>',
  nextArrow: '<i class="fas fa-chevron-right next"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$("#img-slider .img-main").slick({
  arrows: false,
  slidesToShow: 5,
  autoplay: true,
  autoplaySpeed: 600,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $(".navbar").addClass("menu");
  } else {
    $(".navbar").removeClass("menu");
  }

  if ($(window).scrollTop() > 500) {
    $(".app").fadeIn();
  } else {
    $(".app").fadeOut();
  }
});

$(".app").click(function () {
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    500
  );
});

$("#check .check-main").slick({
  prevArrow: '<i class="fas fa-chevron-left p-arrow"></i>',
  nextArrow: '<i class="fas fa-chevron-right n-arrow"></i>',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint:768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$("#testimonial .tes-main").slick({
  prevArrow: '<i class="fas fa-chevron-left a-arrow"></i>',
  nextArrow: '<i class="fas fa-chevron-right b-arrow"></i>',
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
/* Store the element in el */
let el = document.getElementById("tilt");

/* Get the height and width of the element */
const height = el.clientHeight;
const width = el.clientWidth;

/*
 * Add a listener for mousemove event
 * Which will trigger function 'handleMove'
 * On mousemove
 */
el.addEventListener("mousemove", handleMove);

/* Define function a */
function handleMove(e) {
  /*
   * Get position of mouse cursor
   * With respect to the element
   * On mouseover
   */
  /* Store the x position */
  const xVal = e.layerX;
  /* Store the y position */
  const yVal = e.layerY;

  /*
   * Calculate rotation valuee along the Y-axis
   * Here the multiplier 20 is to
   * Control the rotation
   * You can change the value and see the results
   */
  const yRotation = 10 * ((xVal - width / 2) / width);

  /* Calculate the rotation along the X-axis */
  const xRotation = -10 * ((yVal - height / 2) / height);

  /* Generate string for CSS transform property */
  const string =
    "perspective(500px) scale(1) rotateX(" +
    xRotation +
    "deg) rotateY(" +
    yRotation +
    "deg)";

  /* Apply the calculated transformation */
  el.style.transform = string;
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener("mouseout", function () {
  el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
});

/* Add listener for mousedown event, to simulate click */
el.addEventListener("mousedown", function () {
  el.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
});

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener("mouseup", function () {
  el.style.transform = "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
});

// ===========================
$(".js-tilt").tilt({
  maxTilt: 10,
});
$(".counter").counterUp({
  delay: 10,
  time: 1000,
});

new VenoBox({
  selector: ".my-video-links",
});

$("#footer .f-last form input").click(function () {
  $("#footer .f-last form input").addClass("right");
});
