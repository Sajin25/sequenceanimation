const box = document.getElementById('box');
const startBtn = document.getElementById('startBtn');

function moveBoxTo(x, y) {
  return new Promise(resolve => {
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;

    // Wait for the transition to end (1s)
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

async function runAnimationSequence() {
  await moveBoxTo(300, 100);  // move right
  await moveBoxTo(300, 300);  // move down
  await moveBoxTo(100, 300);  // move left
  await moveBoxTo(100, 100);  // move up
}

startBtn.addEventListener('click', runAnimationSequence);
