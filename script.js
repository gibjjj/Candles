window.addEventListener('scroll', function() {
  let offset = window.pageYOffset;
  let parallax = document.getElementById('parallax');
  let content = document.querySelector('.parallax-content');
  content.style.transform = `translate(-50%, -${offset * 0.3}px)`;
});
