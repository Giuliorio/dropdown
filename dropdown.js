const dropdownButtons = document.querySelectorAll('.toggle');

document.addEventListener('click', (event) => {
  const menu = event.target.closest('.menu');
  const toggle = event.target.closest('.toggle');

  if (!menu && !toggle) {
    closeAllDropdowns();
  }
});

dropdownButtons.forEach((dropdownButton) =>
  dropdownButton.addEventListener('click', () => {
    const dropdown = dropdownButton.parentElement;
    const menu = dropdown.querySelector('.menu');

    closeAllDropdowns();
    menu.classList.toggle('visible');
  })
);

function closeAllDropdowns() {
  const dropdownMenus = document.querySelectorAll('.dropdown .menu');
  dropdownMenus.forEach((menu) => menu.classList.remove('visible'));
}
