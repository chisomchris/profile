const timeDisplay = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  if (timeDisplay) {
    timeDisplay.textContent = Date.now();
  }
}

updateTime();

setInterval(updateTime, 600);
