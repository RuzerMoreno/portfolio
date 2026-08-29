const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('githubLink').addEventListener('click', (e) => {
  if (e.currentTarget.getAttribute('href') === '#') e.preventDefault();
});
document.getElementById('linkedinLink').addEventListener('click', (e) => {
  if (e.currentTarget.getAttribute('href') === '#') e.preventDefault();
});
