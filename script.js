// FADE ON HOMEPAGE

setTimeout(function() {
  document.getElementById('splash-screen').classList.add('hidden');
  document.getElementById('main-content').classList.remove('hidden');
  document.getElementById('main-content').style.display = 'block'; // Explicitly set display
  document.body.style.overflow = 'auto';
}, 15000);

// IMAGE SWITCH
// image id
function changeImage(element) {
  // Get just the filename from the current src
  var currentSrc = element.src;
  
  // Replace -bw with -gold in the path
  var newSrc = currentSrc.replace('-bw.png', '-gold.png');
  
  element.src = newSrc;
}