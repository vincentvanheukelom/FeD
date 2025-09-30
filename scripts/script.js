
const banner = document.getElementById('banner');
const accept = document.getElementById('accept');


window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    banner.style.display = 'block';
  }
  if (window.scrollY < 200) {
    banner.style.display = 'none';
  }
});

