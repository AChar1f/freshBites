//event listeners to the CTA button
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
  // click handler logic
  console.log('CTA button clicked!');
});

// logo element
const logo = document.querySelector('.logo');

// animation function
function bounceAnimation() {
  logo.style.transform = 'translateY(0)';
  logo.animate(
    [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-20px)' },
      { transform: 'translateY(0)' }
    ],
    {
      duration: 2000,
      iterations: Infinity,
      easing: 'ease-in-out'
    }
  );
}

// Call the animation function when the page loads
window.addEventListener('load', bounceAnimation);