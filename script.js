const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  timeElement.textContent = Date.now();
}

updateTime(); // show immediately
setInterval(updateTime, 1000); // update every second
