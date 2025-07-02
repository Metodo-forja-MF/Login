const canvas = document.createElement('canvas');
canvas.id = 'smoke-canvas';
canvas.style.position = 'absolute';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = 1;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
let particles = [];

function createParticle() {
  const x = Math.random() * canvas.width;
  const y = canvas.height;
  const radius = Math.random() * 20 + 20;
  const alpha = Math.random() * 0.1 + 0.1;
  const speed = Math.random() * 1 + 0.5;
  particles.push({ x, y, radius, alpha, speed });
}

function drawSmoke() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(200, 200, 200, ${p.alpha})`;
    ctx.fill();
    p.y -= p.speed;
    p.alpha -= 0.001;
    if (p.alpha <= 0) particles.splice(i, 1);
  });
}

function animate() {
  if (particles.length < 100) createParticle();
  drawSmoke();
  requestAnimationFrame(animate);
}
animate();