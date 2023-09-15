// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // Function to create a white star
  function createWhiteStar() {
    const star = document.createElement('div');
    star.className = 'star-white';
  
    const size = getRandomNumber(0.5, 1); // Random star size between 1px and 4px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
  
    // Set positions to cover the full viewport
    star.style.top = `${getRandomNumber(0, 100)}vh`;
    star.style.left = `${getRandomNumber(0, 100)}vw`;
  
    document.body.appendChild(star);
  }
  
  // Function to create a colored star
  function createColoredStar() {
    const star = document.createElement('div');
    star.className = 'star-colored';
  
    const size = getRandomNumber(0.5, 1); // Random star size between 1px and 4px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
  
    // Set positions to cover the full viewport
    star.style.top = `${getRandomNumber(0, 100)}vh`;
    star.style.left = `${getRandomNumber(0, 100)}vw`;
  
    document.body.appendChild(star);
  }
  
  // Create a specified number of stars
  const numberOfStars = 600; // Adjust this value as needed
  for (let i = 0; i < numberOfStars; i++) {
    createWhiteStar();
    createColoredStar();
  }