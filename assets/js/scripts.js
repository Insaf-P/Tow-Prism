//Initialize Swiper


function showCount(n){
  var count = $('.carousel-inner .carousel-item').length;
  $('.carousel-number-counting').html(n+"/"+count);
}

window.onload = () => {
  setInterval(()=>{
    $('.carousel-inner .carousel-item').each((i,n)=>{
      // console.log(n);
      if($(n).hasClass('active')){
        i = i+1;
        showCount(i);
        $('.carousel-indicators [data-bs-target]').removeClass('active');
        $('.slide-'+i).addClass('active');
      }
    });
  },100);
}


 
var swiper = new Swiper(".Swiper-client-slider", {  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
    },
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
});

 
var swiper = new Swiper(".Swiper-testimonial-slider", {  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
  },
  loop: true,
  centeredSlides: true,
  slidesPerView: 2.5,
  spaceBetween: 50,
});