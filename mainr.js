function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// dropdown js //////////
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// scroll js ///////

// SCROLL js //
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*SCROLL js*/

// sr.reveal(".code1", { interval: 200 });
// sr.reveal(".amet", { interval: 200 });
// sr.reveal(".choose-grid-item", { interval: 200 });
// sr.reveal(".choose-grid-item-one", { interval: 200 });
// sr.reveal(".our-gird-item", { interval: 200 });

// $(".collapsible").hide();
$(".collapsible li").click(function () {
  // $(this).parent(".sub-menu").children("ul").slideToggle("100");
  $(this).find(".right").toggleClass("fa-chevron-up fa-chevron-down");
});

// phanthanhkeoqualai //
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  // nav: true,
  autoplay: true,
  autoplayTimeout: 1000,
  responsive: {
    0: {
      iteams: 1,
    },
    600: {
      iteams: 2,
    },
    1000: {
      iteams: 4,
    },
  },
});

// phanscroll//
$(function () {
  $(window).scroll(function () {
    $(this).scrollTop() > 600
      ? $(".goto-top").addClass("arlniainf")
      : $(".goto-top").removeClass("arlniainf");
  }),
    $(".goto-top").click(function () {
      return $("html,body").animate({ scrollTop: 0 }, 2200), !1;
    });
});

// loading //

$(window).on("load", function (event) {
  $("body").removeClass("preloading");
  $(".load").delay(1000).fadeOut("fast");
});

// _>_ //

////////////////////////////////

var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;
var transforms = [
  "transform",
  "msTransform",
  "webkitTransform",
  "mozTransform",
  "oTransform",
];
var transformProperty = getSupportedPropertyName(transforms);
var snowflakes = [];
var browserWidth;
var browserHeight;
var numberOfSnowflakes = 50;
var resetPosition = false;
function setup() {
  window.addEventListener("DOMContentLoaded", generateSnowflakes, false);
  window.addEventListener("resize", setResetFlag, false);
}
setup();
function getSupportedPropertyName(b) {
  for (var a = 0; a < b.length; a++) {
    if (typeof document.body.style[b[a]] != "undefined") {
      return b[a];
    }
  }
  return null;
}
function Snowflake(b, a, d, e, c) {
  this.element = b;
  this.radius = a;
  this.speed = d;
  this.xPos = e;
  this.yPos = c;
  this.counter = 0;
  this.sign = Math.random() < 0.5 ? 1 : -1;
  this.element.style.opacity = 0.5 + Math.random();
  this.element.style.fontSize = 4 + Math.random() * 30 + "px";
}
Snowflake.prototype.update = function () {
  this.counter += this.speed / 5000;
  this.xPos += (this.sign * this.speed * Math.cos(this.counter)) / 40;
  this.yPos += Math.sin(this.counter) / 40 + this.speed / 30;
  setTranslate3DTransform(
    this.element,
    Math.round(this.xPos),
    Math.round(this.yPos)
  );
  if (this.yPos > browserHeight) {
    this.yPos = -50;
  }
};
function setTranslate3DTransform(a, c, b) {
  var d = "translate3d(" + c + "px, " + b + "px, 0)";
  a.style[transformProperty] = d;
}
function generateSnowflakes() {
  var b = document.querySelector(".snowflake");
  var h = b.parentNode;
  browserWidth = document.documentElement.clientWidth;
  browserHeight = document.documentElement.clientHeight;
  for (var d = 0; d < numberOfSnowflakes; d++) {
    var j = b.cloneNode(true);
    h.appendChild(j);
    var e = getPosition(50, browserWidth);
    var a = getPosition(50, browserHeight);
    var c = 5 + Math.random() * 40;
    var g = 4 + Math.random() * 10;
    var f = new Snowflake(j, g, c, e, a);
    snowflakes.push(f);
  }
  h.removeChild(b);
  moveSnowflakes();
}
function moveSnowflakes() {
  for (var b = 0; b < snowflakes.length; b++) {
    var a = snowflakes[b];
    a.update();
  }
  if (resetPosition) {
    browserWidth = document.documentElement.clientWidth;
    browserHeight = document.documentElement.clientHeight;
    for (var b = 0; b < snowflakes.length; b++) {
      var a = snowflakes[b];
      a.xPos = getPosition(50, browserWidth);
      a.yPos = getPosition(50, browserHeight);
    }
    resetPosition = false;
  }
  requestAnimationFrame(moveSnowflakes);
}
function getPosition(b, a) {
  return Math.round(-1 * b + Math.random() * (a + 2 * b));
}
function setResetFlag(a) {
  resetPosition = true;
}
