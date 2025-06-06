
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const body = document.body;
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove('scrolling-down');
    body.classList.remove('scrolling-up');
    return;
  }
  if (currentScroll > lastScroll) {
    body.classList.remove('scrolling-up');
    body.classList.add('scrolling-down');
  } else {
    body.classList.remove('scrolling-down');
    body.classList.add('scrolling-up');
  }
  lastScroll = currentScroll;
});
