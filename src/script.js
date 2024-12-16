
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.sidebar__menu-toggle');
  const sidebar = document.querySelector('.sidebar');

  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
});

