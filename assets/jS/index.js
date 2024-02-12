
// Mobile menu section

const menuBtn = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile-nav')

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
})

// Owl Carousel for the hero section

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            }
        }
    })
  });


//   Shows elements with class of 'reveal' upon scrolled into viewport


  window.addEventListener('scroll', reveal);

  function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    for ( let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealtTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 120;

        if( revealtTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active') 
         } else {
            reveals[i].classList.remove( 'active' );
         }
    }
}


// Pop-up message linked to .learn-more showcasing the current time and date


document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.learn-more').addEventListener('click', function(event) {
        event.preventDefault();

        const currentDate = new Date();
        const currentDateTime = currentDate.toLocaleString();

        const popupMessage = `The pop-up has been clicked on ${currentDateTime}.`;
        
        alert(popupMessage);
    });
});