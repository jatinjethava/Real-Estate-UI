import Lenis from 'lenis';

const TOTAL_FRAMES = 50;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const loader = document.getElementById('loader');
const loaderBar = document.getElementById('loader-bar');

const images = [];
let loadedCount = 0;
let currentFrame = 0;
let targetFrame = 0;

function getFrameUrl(index) {
  const paddedNum = String(index + 1).padStart(3, '0');
  return `/homeImages/ezgif-frame-${paddedNum}.jpg`;
}

function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  render();
}

window.addEventListener('resize', resizeCanvas);

function drawCoverImage(img) {
  if (!img || !img.complete) return;

  const imgWidth = img.naturalWidth || 1920;
  const imgHeight = img.naturalHeight || 1080;
  const imgAspect = imgWidth / imgHeight;
  const canvasAspect = canvas.width / canvas.height;

  let drawWidth, drawHeight, offsetX, offsetY;

  if (canvasAspect > imgAspect) {
    drawWidth = canvas.width;
    drawHeight = canvas.width / imgAspect;
    offsetX = 0;
    offsetY = (canvas.height - drawHeight) / 2;
  } else {
    drawHeight = canvas.height;
    drawWidth = canvas.height * imgAspect;
    offsetX = (canvas.width - drawWidth) / 2;
    offsetY = 0;
  }

  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}


function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(currentFrame)));
  const img = images[frameIndex];

  if (img && img.complete) {
    drawCoverImage(img);
  }
}

// Lenis smooth momentum scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 2,
});

function updateScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (maxScroll <= 0) return;
  const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));
  targetFrame = scrollFraction * (TOTAL_FRAMES - 1);
}

lenis.on('scroll', updateScroll);
window.addEventListener('scroll', updateScroll);

function animate(time) {
  lenis.raf(time);

  const diff = targetFrame - currentFrame;
  if (Math.abs(diff) > 0.001) {
    currentFrame += diff * 0.2;
    render();
  }

  requestAnimationFrame(animate);
}

function preloadImages() {
  for (let i = 0; i < TOTAL_FRAMES; i++) {
    const img = new Image();
    img.src = getFrameUrl(i);
    img.onload = () => {
      loadedCount++;
      const progress = Math.round((loadedCount / TOTAL_FRAMES) * 100);
      if (loaderBar) loaderBar.style.width = `${progress}%`;

      if (loadedCount === TOTAL_FRAMES) {
        setTimeout(() => {
          if (loader) loader.classList.add('hidden');
          resizeCanvas();
          updateScroll();
          render();
        }, 200);
      }
    };
    img.onerror = () => {
      loadedCount++;
      if (loadedCount === TOTAL_FRAMES) {
        if (loader) loader.classList.add('hidden');
        resizeCanvas();
        updateScroll();
        render();
      }
    };
    images.push(img);
  }
}

// Kickoff
resizeCanvas();
preloadImages();
requestAnimationFrame(animate);
