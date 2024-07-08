document.addEventListener('DOMContentLoaded', function() {
  const product = document.querySelector('.product');
  let hoverLocked = false;

  product.addEventListener('mouseenter', () => {
    if (!hoverLocked) {
      product.classList.add('hovered');
      hoverLocked = true;
    }
  });

  product.addEventListener('mouseleave', () => {
    if (hoverLocked) {
      // Wait for the hover effect to complete
      product.classList.remove('hovered');
      setTimeout(() => {
        hoverLocked = false;
      }, 500); // Match the transition duration
    }
  });
});
