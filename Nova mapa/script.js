
// Import Swiper and modules
import Swiper, { Navigation, } from 'assets/swiper';

// Now you can use Swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    speed: 500,
    spaceBetween: 500,
  // Install modules
  modules: [Navigation],
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // ...
});