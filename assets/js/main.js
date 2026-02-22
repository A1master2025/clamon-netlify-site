(function(){
  const btn = document.querySelector('[data-nav-toggle]');
  const links = document.querySelector('[data-nav-links]');
  if(btn && links){
    btn.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();
