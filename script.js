document.addEventListener('DOMContentLoaded', () => {
  // ====== Mobile menu ======
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".icon");
    if (menu) menu.classList.toggle("open");
    if (icon) icon.classList.toggle("open");
  }
  window.toggleMenu = toggleMenu; // if called from HTML onclick

  // ====== Auto typing ======
  const textToType = "Anshul Gautam";
  const typingSpeed = 180;
  const typingDelay = 5200;
  const h1Element = document.getElementById("auto-typing");
  let charIndex = 0;

  function typeText() {
    if (!h1Element) return;
    if (charIndex < textToType.length) {
      h1Element.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      setTimeout(eraseText, typingDelay);
    }
  }

  function eraseText() {
    if (!h1Element) return;
    if (charIndex > 0) {
      h1Element.textContent = textToType.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, typingSpeed);
    } else {
      charIndex = 0;
      setTimeout(typeText, typingDelay);
    }
  }

  setTimeout(typeText, typingDelay);

  // ====== Carousel ======
  const slides = document.querySelectorAll('.slide');
  const total = slides.length; // use actual count, not hard-coded numbers
  const leftButton = document.getElementById('left');
  const rightButton = document.getElementById('right');

  let current = 0;

  const toSlide = (n) => {
    if (total === 0) return;
    current = (n + total) % total;
    const prev = (current - 1 + total) % total;
    const next = (current + 1) % total;

    for (let i = 0; i < total; i++) {
      slides[i].classList.remove('active', 'prev', 'next');
    }
    slides[current]?.classList.add('active');
    slides[prev]?.classList.add('prev');
    slides[next]?.classList.add('next');
  };

  const toPrevious = () => toSlide(current - 1);
  const toNext = () => toSlide(current + 1);

  if (leftButton) leftButton.addEventListener('click', toPrevious);
  if (rightButton) rightButton.addEventListener('click', toNext);

  toSlide(0);

  // ====== Marquee ======
  const marquee = document.getElementById('scrolling-banner');
  if (marquee) {
    marquee.addEventListener('animationiteration', () => {
      marquee.style.animation = 'none';
      setTimeout(() => { marquee.style.animation = ''; }, 0);
    });
  }
});
