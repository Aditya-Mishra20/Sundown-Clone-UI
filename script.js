const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function pg4Animation() {
  let elemC = document.querySelector("#elem-container");
  let fixImg = document.querySelector("#fixed-image");
  elemC.addEventListener("mouseenter", function () {
    fixImg.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function () {
    fixImg.style.display = "none";
  });

  const elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      let image = e.getAttribute("data-image");
      fixImg.style.backgroundImage = `url(${image})`;
    });
  });
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 90,
  });
}
swiperAnimation();
pg4Animation();

const menu = document.querySelector("nav h3");
const full = document.querySelector("#fullscr");
const navimg = document.querySelector("nav img");
const nav = document.querySelector("nav")
menu.addEventListener("click", function(){
  full.style.top = 0
  nav.style.position = "relative"
  nav.style.zIndex = 100
  navimg.style.opacity = 0
})