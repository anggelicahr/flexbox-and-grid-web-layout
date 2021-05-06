document.querySelector('.menu-btn').addEventListener('click', () => {
 document.querySelector('.nav__menu').classList.toggle('show');
});
  
  ScrollReveal().reveal('.header__showcase');
  ScrollReveal().reveal('.news__cards', { delay: 500 });
  ScrollReveal().reveal('.banner', { delay: 500 });
  ScrollReveal().reveal('.form', { delay: 500 });
  ScrollReveal().reveal('.social__media', { delay: 500 });