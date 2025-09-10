// Navigation scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#000000';
    } else {
        nav.style.background = 'linear-gradient(#000000 50%, #00000000)';
    }
});

document.addEventListener('DOMContentLoaded', () => {
  // Select all icon buttons with the class 'acc-icon'
  const iconButtons = document.querySelectorAll('.acc-icon');

  iconButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Find the parent container of the clicked button
      const parentContainer = button.closest('.icon-container');
      // Find the bubble element inside that same container
      const bubble = parentContainer.querySelector('.bubble');
      
      // Toggle the 'active' class on the bubble
      bubble.classList.toggle('active');
    });
  });

  // This part hides the bubble when the user clicks anywhere else
  document.addEventListener('click', (event) => {
    // Select all currently active bubbles
    document.querySelectorAll('.bubble.active').forEach(bubble => {
      const parentContainer = bubble.closest('.icon-container');
      // If the click happened outside of this bubble's container, hide it
      if (!parentContainer.contains(event.target)) {
        bubble.classList.remove('active');
      }
    });
  });

  // Paket Wisata Modal Popup
  const modal = document.getElementById('package-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalDetail = document.getElementById('modal-detail');
  const orderBtn = document.querySelector('.modal-order');
  const cancelBtn = document.querySelector('.modal-cancel');

  document.querySelectorAll('.package-card').forEach(card => {
    card.addEventListener('click', () => {
      modal.classList.add('active');
      modalImg.src = card.getAttribute('data-img');
      modalTitle.textContent = card.getAttribute('data-title');
      modalDesc.textContent = card.getAttribute('data-desc');
      // modalDetail tetap default, bisa diubah jika ingin detail berbeda
    });
  });

  cancelBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // Optional: close modal when clicking outside content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
});