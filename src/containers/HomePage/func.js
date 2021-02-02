
console.clear();

const textPath = document.querySelector('#text-path');

const textContainer = document.querySelector('#text-container');

const path = document.querySelector(textPath.getAttribute('href'));

const pathLength = path.getTotalLength();
console.log(pathLength);

function updateTextPathOffset(offset) {
  textPath.setAttribute('startOffset', offset);
}

updateTextPathOffset(pathLength);

function onScroll() {
  requestAnimationFrame(() => {
    const rect = textContainer.getBoundingClientRect();
    const scrollPercent = rect.y / window.innerHeight;
    console.log(scrollPercent);
    updateTextPathOffset(scrollPercent * 2 * pathLength);
  });
}

window.addEventListener('scroll', onScroll);
