
// Pháo hoa nền
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const fireworks = [];

function createFirework() {
  const x = random(100, canvas.width - 100);
  const y = random(100, canvas.height / 2);
  const radius = random(2, 4);
  const color = `hsl(${random(0, 360)}, 100%, 60%)`;

  for (let i = 0; i < 30; i++) {
    fireworks.push({
      x,
      y,
      radius,
      color,
      angle: random(0, Math.PI * 2),
      speed: random(1, 5),
      alpha: 1,
    });
  }
}

function drawFireworks() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = fireworks.length - 1; i >= 0; i--) {
    const f = fireworks[i];
    const vx = Math.cos(f.angle) * f.speed;
    const vy = Math.sin(f.angle) * f.speed;
    f.x += vx;
    f.y += vy;
    f.alpha -= 0.02;

    ctx.beginPath();
    ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
    ctx.fillStyle = f.color;
    ctx.globalAlpha = f.alpha;
    ctx.fill();

    if (f.alpha <= 0) fireworks.splice(i, 1);
  }

  ctx.globalAlpha = 1;
}

function animate() {
  drawFireworks();
  requestAnimationFrame(animate);
}

setInterval(createFirework, 1000);
animate();
