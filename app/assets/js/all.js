$(function() {
  console.log('Hello Bootstrap5');
});

// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,

  // 768px 以上
  breakpoints: {
    768:{
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
  
  /* 移除 pagination */
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});


// AOS Animation

//AOS.init();
AOS.init({
  once: true,
  offset: 400, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000 // values from 0 to 3000, with step 50ms
});