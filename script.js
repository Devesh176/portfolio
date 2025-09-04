document.addEventListener('DOMContentLoaded', () => {

  const spotlight = document.querySelector('.spotlight');

  // Activate spotlight effect only on devices that support hover
  if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      spotlight.style.opacity = '1';
      spotlight.style.left = `${e.pageX}px`;
      spotlight.style.top = `${e.pageY}px`;
    });
    document.body.addEventListener('mouseleave', () => {
        spotlight.style.opacity = '0';
    });
  }

});