import './style.css';

window.addEventListener('DOMContentLoaded', () => {
  initDropdowns();
});

function initDropdowns() {
  const dropdownButtons = document.querySelectorAll('.toggle');

  document.addEventListener('click', (event) => {
    const menu = event.target.closest('.menu');
    const toggle = event.target.closest('.toggle');

    if (!menu && !toggle) {
      closeAllDropdowns();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeAllDropdowns();
    }

    if (event.key === 'ArrowDown') {
      handleArrowNavigation('down');
    }

    if (event.key === 'ArrowUp') {
      handleArrowNavigation('up');
    }
  });

  dropdownButtons.forEach((dropdownButton) =>
    dropdownButton.addEventListener('click', () => {
      const dropdown = dropdownButton.parentElement;
      const menu = dropdown.querySelector('.menu');

      closeAllDropdowns();
      menu.classList.toggle('visible');

      const firstItem = menu.querySelector('.item');
      console.log(firstItem);
      if (firstItem) firstItem.focus();
    })
  );

  function closeAllDropdowns() {
    const dropdownMenus = document.querySelectorAll('.dropdown .menu');
    dropdownMenus.forEach((menu) => menu.classList.remove('visible'));
  }

  function handleArrowNavigation(direction) {
    const menu = document.querySelector('.dropdown .visible');
    if (!menu) return;

    const items = [...menu.querySelectorAll('.item')];

    let currentIndex = items.findIndex(
      (item) => item === document.activeElement
    );

    if (direction == 'down') {
      currentIndex = currentIndex === items.length - 1 ? 0 : (currentIndex = 1);
    } else if (direction === 'up') {
      currentIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    }

    items[currentIndex].focus();
  }
}
