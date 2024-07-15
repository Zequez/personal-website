function processWavyCanvas() {
  const wavyAnimationTrigger = document.getElementById(
    "wavy-animation-trigger"
  )!;
  const scrollBg = document.getElementById("wavy-scroll-bg")!;
  const canvas = document.getElementById("wavy")! as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;

  const waveWidth = 0.24; // Wave frequency (number of cycles per pixel)
  const waveHeight = 1.8; // Wave amplitude (height in pixels)
  const maxPhaseSpeed = 0.4;
  const phaseFriction = 0.01;
  const maxPhaseAcceleration = 0.02;

  let phase = 0;
  let w = 0;
  let h = 0;
  let animated = true;
  let hue = 0;
  let saturation = 0;
  let phaseAcceleration = 0;
  let phaseSpeed = (Math.random() - 0.5) * (maxPhaseSpeed * 2);
  let force = true;

  function recalculateCanvas() {
    const style = getComputedStyle(canvas);
    hue = parseInt(style.getPropertyValue("--main-hue"));
    saturation = parseInt(style.getPropertyValue("--main-saturation"));
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    w = canvas.width;
    h = canvas.height;
  }

  function drawSineWave() {
    const skip = phaseAcceleration === 0 && Math.abs(phaseSpeed) < 0.03;
    if (skip && !force) {
      phaseSpeed = 0;
    } else {
      force = false;
      phaseSpeed = clampSpeed(
        (phaseSpeed + phaseAcceleration) * (1 - phaseFriction),
        maxPhaseSpeed
      );
      phase -= phaseSpeed;

      ctx.clearRect(0, 0, w, h);

      ctx.beginPath();
      ctx.moveTo(0, h / 2);

      for (let x = 0; x < w; x++) {
        const y = h / 2 + Math.sin(x * waveWidth + phase) * waveHeight;
        ctx.lineTo(x, y);
      }

      ctx.fillStyle = `hsl(${hue}, ${saturation}%, 40%)`;
      ctx.strokeStyle = `hsl(${hue}, ${saturation}%, 30%)`;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.lineTo(w, 0);
      ctx.lineTo(0, 0);
      ctx.lineTo(0, h / 2);
      ctx.fill();

      scrollBg.style.backgroundPositionX = `${-(phase / waveWidth)}px`;
    }

    if (animated) {
      requestAnimationFrame(drawSineWave);
    }
  }

  function clampSpeed(speed: number, max: number) {
    return Math.min(Math.max(speed, -max), max);
  }

  recalculateCanvas();
  drawSineWave();

  window.addEventListener("resize", () => {
    recalculateCanvas();
    if (!animated) {
      drawSineWave();
    } else {
      force = true;
    }
  });

  wavyAnimationTrigger.addEventListener("mousemove", (ev) => {
    const { left, width } = wavyAnimationTrigger.getBoundingClientRect();
    const coef = (ev.clientX - left - width / 2) / (width / 2);
    if (Math.abs(coef) > 0.25) {
      phaseAcceleration = maxPhaseAcceleration * coef;
    } else {
      phaseAcceleration = 0;
    }
  });

  wavyAnimationTrigger.addEventListener("mouseout", () => {
    phaseAcceleration = 0;
  });

  document.addEventListener("astro:after-swap", () => {
    recalculateCanvas();
    if (!animated) {
      drawSineWave();
    } else {
      force = true;
    }
  });
}

processWavyCanvas();
