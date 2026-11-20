// Each "+" button opens a panel showing that point as Problem -> What I did -> Result.
// Without JS everything stays visible and the buttons are hidden.
(function () {
  var buttons = document.querySelectorAll('.toggle');
  buttons.forEach(function (b) {
    var panel = document.getElementById(b.getAttribute('aria-controls'));
    if (!panel) return;
    panel.hidden = true;
    b.addEventListener('click', function () {
      var open = b.getAttribute('aria-expanded') === 'true';
      if (open) {
        panel.hidden = true;
        panel.classList.remove('in');
        b.setAttribute('aria-expanded', 'false');
        b.textContent = '+';
        b.setAttribute('aria-label', 'Show breakdown');
      } else {
        panel.hidden = false;
        void panel.offsetWidth; // restart the animation each time it opens
        panel.classList.add('in');
        b.setAttribute('aria-expanded', 'true');
        b.textContent = '−';
        b.setAttribute('aria-label', 'Hide breakdown');
      }
    });
  });
})();
