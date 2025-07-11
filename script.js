// Hamburger toggle
document.getElementById('hamburger').onclick = function () {
  document.querySelector('.nav-list').classList.toggle('active');
};

// Theme switch
document.getElementById('themeToggle').onclick = function () {
  document.body.classList.toggle('dark-mode');
  this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
};
