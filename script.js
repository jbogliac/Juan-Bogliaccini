const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

const languageToggle = document.querySelector('.lang-toggle');
const translated = document.querySelectorAll('[data-en][data-es]');

function setLanguage(lang) {
  document.documentElement.lang = lang;
  translated.forEach(el => {
    el.innerHTML = el.getAttribute(`data-${lang}`);
  });
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });
  localStorage.setItem('siteLang', lang);
}

const savedLanguage = localStorage.getItem('siteLang') || 'en';
setLanguage(savedLanguage);

if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    setLanguage(document.documentElement.lang === 'en' ? 'es' : 'en');
  });
}
