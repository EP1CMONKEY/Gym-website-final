// Toggle mobile nav
const toggle = document.querySelector('.nav-toggle');
const menu   = document.querySelector('.nav-bar ul');

toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});