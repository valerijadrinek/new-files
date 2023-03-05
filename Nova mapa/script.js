
// Import Swiper and modules
import Swiper from 'swiper';

// Now you can use Swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    speed: 500,
    spaceBetween: 100,
  // Install modules
  modules: [Navigation],
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // ...
});