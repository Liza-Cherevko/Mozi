// Custom scripts

// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    const navBtns = document.querySelector('.nav__btns')
   
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
        navBtns.classList.add('active')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
        navBtns.classList.remove('active')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
        navBtns.classList.remove('active')
      }
    })
  }
  burgerMenu()
  

  
var swiper = new Swiper('.mySwiper', {
  observer: true,
  observeParents: true,
  slidesPerView:3,
  spaceBetween:60,
  slidesPerGroup: 3,
  navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
       
        breakpoints: {
          768: {
            slidesPerView:3,
            spaceBetween:24.8,
            
          },
          1000: {
            slidesPerView:3,
            spaceBetween:30,
            
          },        
          1200: {
            slidesPerView:3,
            spaceBetween:55,
          }
        
        }
});
