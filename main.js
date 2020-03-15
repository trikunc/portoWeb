const menuTogler = document.querySelector(".menu-toggler");
const topNav = document.querySelector(".top-nav");
const links = document.querySelectorAll(".nav-list li");
let navLink = Array.from(document.querySelectorAll('.top-nav .nav-link'));
const buttonUp = document.querySelector(".up");

menuTogler.addEventListener("click", () => {
    topNav.classList.toggle("open");
    menuTogler.classList.toggle("open");
    links.forEach(link => {
    })
})

navLink.forEach(node => {
  node.addEventListener('click', () => {
    menuTogler.classList.remove('open');
    topNav.classList.remove('open');
  })
});

// buttonUp.addEventListener("click", () => {
//   window.scrollTo(0, 0);
// })


buttonUp.addEventListener("click", () => {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);
  
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
  
  function easeInOutCubic(t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t*t + b;
  t -= 2;
  return c/2*(t*t*t + 2) + b;
  };

});

AOS.init({
  easing: 'ease',
  duration: 1800,
  once: true
});