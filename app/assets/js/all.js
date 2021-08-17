$(function() {
  console.log('Hello Bootstrap5');
});

// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  
  /* 移除 pagination */
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});