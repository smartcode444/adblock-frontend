// Single deliberate effect: the header picks up a slightly stronger
// shadow once the page has scrolled, so it reads as "above" the content.
const header = document.querySelector('.site-header');

function updateHeaderState() {
  if (window.scrollY > 8) {
    header.style.boxShadow = '0 1px 0 rgba(22, 23, 26, 0.06)';
  } else {
    header.style.boxShadow = 'none';
  }
}

window.addEventListener('scroll', updateHeaderState, { passive: true });
updateHeaderState();
