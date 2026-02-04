setTimeout(function() {
  document.getElementById('splash-screen').classList.add('hidden');
  document.getElementById('main-content').classList.remove('hidden');
  document.getElementById('main-content').style.display = 'block'; // Explicitly set display
  document.body.style.overflow = 'auto';
}, 3000);