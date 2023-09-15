function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const textToType = "Anshul Gautam"; // Text you want to auto-type
const typingSpeed = 180; // Typing speed in milliseconds
const typingDelay = 5200; // Delay before typing starts in milliseconds

const h1Element = document.getElementById("auto-typing");
let charIndex = 0;

function typeText() {
  if (charIndex < textToType.length) {
    h1Element.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, typingDelay); // Start erasing text after a delay
  }
}

function eraseText() {
  if (charIndex > 0) {
    h1Element.textContent = textToType.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, typingSpeed);
  } else {
    charIndex = 0;
    setTimeout(typeText, typingDelay); // Start typing again after a delay
  }
}

// Start typing after a delay
setTimeout(typeText, typingDelay);

// !!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!



const slider = document.querySelector('.carousel_container');
const carousel_container = document.querySelectorAll('.slide');
const leftButton = document.getElementById('left'); // Select the left button by ID
const rightButton = document.getElementById('right'); // Select the right button by ID

leftButton.addEventListener('click', function () {
  toPrevious();
});

rightButton.addEventListener('click', function () {
  toNext();
});

let current = 0;
let prev = 6;
let next = 3;

const toPrevious = () => {
  console.log('prev');
  if (current > 0) {
    toSlide(current - 1);
  } else {
    toSlide(carousel_container.length - 1);
  }
};

const toNext = () => {
  if (current < 6) {
    toSlide(current + 1);
  } else {
    toSlide(0);
  }
};

const toSlide = (number) => {
  current = number;
  prev = current - 1;
  next = current + 1;

  if (next === 4) {
    next = 0;
  }

  if (prev === -1) {
    prev = 3;
  }

  for (let i = 0; i < carousel_container.length; i++) {
    carousel_container[i].classList.remove('active');
    carousel_container[i].classList.remove('prev');
    carousel_container[i].classList.remove('next');
  }

  carousel_container[current].classList.add('active');
  carousel_container[prev].classList.add('prev');
  carousel_container[next].classList.add('next');
};

// Initially, set the first slide as active and the others as prev and next
toSlide(0);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

 // JavaScript to reset the marquee when it reaches the left side
 const marquee = document.getElementById('scrolling-banner');

 marquee.addEventListener('animationiteration', () => {
     marquee.style.animation = 'none';
     setTimeout(() => {
         marquee.style.animation = '';
     }, 0);
 });

//  !!!!!!!!!!!!!!!!!!!!!!
//  !!!!!!!!!!!!!!!!!!!!!!
//  !!!!!!!!!!!!!!!!!!!!!!
//  !!!!!!!!!!!!!!!!!!!!!!
//  !!!!!!!!!!!!!!!!!!!!!!



