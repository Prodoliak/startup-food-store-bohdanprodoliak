$('.slider_init').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
		
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
});

$(".burger-wrap").click(function () {
    $(".header_nav").toggleClass("header_nav--open");
    $(".burger").toggleClass('burger--close');
});
$(".main_sidebar-burger").click(function () {
    $(".main_sidebar").toggleClass("main_sidebar--open");
    $(".main_sidebar-burger").toggleClass('main_sidebar-burger--open');
});
