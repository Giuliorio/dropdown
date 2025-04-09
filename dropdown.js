const dropdownButtons = document.querySelectorAll('.toggle');

dropdownButtons.forEach((dropdownButton) =>
  dropdownButton.addEventListener('click', () => {
    const dropdown = dropdownButton.parentElement;
    const menu = dropdown.querySelector('.menu');

    menu.classList.toggle('visible');
  })
);
