// Import our custom CSS
import "bootstrap-icons/font/bootstrap-icons.css"
import '../scss/bootstraps.scss'
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
// import { AOS } from '../../node_modules/aos/dist/aos.js'
import AOS from "aos"
import "aos/dist/aos.css"

const carouselSlide = document.querySelector('#carousel')
const carousel = new bootstrap.Carousel(carouselSlide, {
  interval: 2000,
  touch: false
})


function userScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-sticky');
    } else {
      navbar.classList.remove('navbar-sticky');
    }
  });
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

AOS.init({
  startEvent: 'DOMContentLoaded',
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
})

window.addEventListener("DOMContentLoaded", userScroll)