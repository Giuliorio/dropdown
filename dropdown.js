const dropdownButtons = document.querySelectorAll('.toggle');

document.addEventListener('click', (event) => {
  const menu = event.target.closest('.menu');
  const toggle = event.target.closest('.toggle');

  console.log(menu, toggle);

  if (!menu && !toggle) {
    const dropdownMenus = document.querySelectorAll('.dropdown .menu');
    dropdownMenus.forEach((menu) => menu.classList.remove('visible'));
  }
});

dropdownButtons.forEach((dropdownButton) =>
  dropdownButton.addEventListener('click', () => {
    const dropdown = dropdownButton.parentElement;
    const menu = dropdown.querySelector('.menu');

    menu.classList.toggle('visible');
  })
);
