// Red HB — red animada de fondo
(() => {
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Puntos que derivan lentamente y se enlazan con sus vecinos
  const canvas = document.querySelector(".net");
  const ctx = canvas.getContext("2d");
  const LINK = 150;
  let w, h, dpr, points = [];

  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = innerWidth;
    h = innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(70, (w * h) / 22000));
    points = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < points.length; i++) {
      const a = points[i];
      for (let j = i + 1; j < points.length; j++) {
        const b = points[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK) {
          ctx.strokeStyle = `rgba(242, 240, 235, ${0.07 * (1 - d / LINK)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      ctx.fillStyle = "rgba(242, 240, 235, 0.16)";
      ctx.fillRect(a.x - 1, a.y - 1, 2, 2);
    }
  }

  function step() {
    for (const p of points) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -20) p.x = w + 20; else if (p.x > w + 20) p.x = -20;
      if (p.y < -20) p.y = h + 20; else if (p.y > h + 20) p.y = -20;
    }
    draw();
    if (!document.hidden) requestAnimationFrame(step);
  }

  resize();
  addEventListener("resize", () => { resize(); if (reduceMotion) draw(); });
  if (reduceMotion) {
    draw();
  } else {
    requestAnimationFrame(step);
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) requestAnimationFrame(step);
    });
  }
})();
