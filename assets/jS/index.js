const menuBtn = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile-nav')

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
})

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:false,
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