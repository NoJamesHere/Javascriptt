const square = document.getElementById("square");
const orb = document.getElementById("orb");
const scoreDisplay = document.getElementById("score");
const helpText = document.getElementById("helpme");

let scored = 0;

// Square and orb positions (percentages)
let x = 50, y = 50;
let xorb = 25, yorb = 25;

const baseSpeed = 1;
const keys = { w:false, a:false, s:false, d:false };
const opposite = { w:"s", s:"w", a:"d", d:"a" };
let paused = false;

// Calculate max percentages so square never goes offscreen
function getMaxPos() {
  const gameWidth = window.innerWidth;
  const gameHeight = window.innerHeight;
  const sqW = square.offsetWidth;
  const sqH = square.offsetHeight;

  return {
    maxX: 100 * (gameWidth - sqW) / gameWidth,
    maxY: 100 * (gameHeight - sqH) / gameHeight
  };
}

let { maxX, maxY } = getMaxPos();

// Recalculate on resize
window.addEventListener("resize", () => {
  ({ maxX, maxY } = getMaxPos());
});

// Keyboard input
document.addEventListener("keydown", e => {
  if (["w","a","s","d"].includes(e.key)) {
    if (keys[opposite[e.key]]) return; // ignore opposite
    for (let k in keys) keys[k] = false;
    keys[e.key] = true;
  }
  if (e.key === " ") paused = !paused; // toggle pause
});

// Collision detection
function colliding() {
  const sq = square.getBoundingClientRect();
  const ob = orb.getBoundingClientRect();
  return !(sq.bottom < ob.top || sq.top > ob.bottom || sq.right < ob.left || sq.left > ob.right);
}

// Game loop
function update() {
  if (!paused) {
    // Move square
    if(keys.w) y -= baseSpeed;
    if(keys.s) y += baseSpeed;
    if(keys.a) x -= baseSpeed;
    if(keys.d) x += baseSpeed;

    // Keep square in bounds
    if(y < 0) y = 0;
    if(y > maxY) y = maxY;
    if(x < 0) x = 0;
    if(x > maxX) x = maxX;

    // Check collision
    if(colliding()) {
      // Move orb to random location within bounds
      xorb = Math.random() * 90;
      yorb = Math.random() * 90;
      scored++;
    }
  }

  // Apply positions
  square.style.top = y + "%";
  square.style.left = x + "%";
  orb.style.top = yorb + "%";
  orb.style.left = xorb + "%";

  // Update score
  scoreDisplay.textContent = `Score: ${scored}`;

  // Keep floor/help text at bottom
  helpText.style.left = "50%";
  helpText.style.transform = "translateX(-50%)";

  requestAnimationFrame(update);
}

// Start loop
update();