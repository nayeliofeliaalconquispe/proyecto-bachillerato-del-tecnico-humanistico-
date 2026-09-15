const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const levelButtons = document.querySelectorAll('.level-btn');
const levelPanels = document.querySelectorAll('.level-panel');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

levelButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetLevel = button.dataset.level;

    levelButtons.forEach((btn) => {
      btn.classList.toggle('is-active', btn === button);
    });

    levelPanels.forEach((panel) => {
      panel.classList.toggle('is-active', panel.dataset.panel === targetLevel);
    });
  });
});
