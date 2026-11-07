/* Responsive POS shell: menu and keyboard navigation, no backend changes. */
(() => {
  'use strict';
  const toggle = document.getElementById('mobileNavButton');
  const shade = document.getElementById('mobileBackdrop');
  const nav = document.getElementById('nav');
  const sidebar = document.getElementById('posSidebar');
  if (!toggle || !shade || !nav || !sidebar) return;
  const isMobile = () => window.matchMedia('(max-width: 1024px)').matches;
  const setOpen = (open) => {
    const value = Boolean(open && isMobile());
    document.body.classList.toggle('nav-open', value);
    toggle.setAttribute('aria-expanded', String(value));
    toggle.setAttribute('aria-label', value ? 'Close navigation' : 'Open navigation');
    if (value) sidebar.querySelector('.nav-link')?.focus({preventScroll: true});
    else if (document.activeElement && sidebar.contains(document.activeElement)) toggle.focus({preventScroll: true});
  };
  toggle.addEventListener('click', () => setOpen(!document.body.classList.contains('nav-open')));
  shade.addEventListener('click', () => setOpen(false));
  nav.addEventListener('click', (event) => {
    if (event.target.closest('.nav-link')) setOpen(false);
  });
  nav.addEventListener('keydown', (event) => {
    if ((event.key === 'Enter' || event.key === ' ') && event.target.classList.contains('nav-link')) {
      event.preventDefault();
      event.target.click();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.body.classList.contains('nav-open')) setOpen(false);
  });
  window.addEventListener('resize', () => {if (!isMobile()) setOpen(false)});
  const observer = new MutationObserver(() => {
    nav.querySelectorAll('.nav-link').forEach((link) => {
      link.setAttribute('role', 'button');
      link.setAttribute('tabindex', '0');
      if (link.classList.contains('active')) link.setAttribute('aria-current', 'page');
    });
  });
  observer.observe(nav, {childList: true});
  observer.takeRecords();
  nav.querySelectorAll('.nav-link').forEach((link) => link.setAttribute('tabindex', '0'));
})();