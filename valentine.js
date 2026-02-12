const params = new URLSearchParams(window.location.search);
const name = params.get("name");

const message = document.getElementById("message");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

let isAccepted = false;


if (name) {
  message.innerText = `${name}, will you be my Valentine? ❤️`;
}


function moveNoButton() {
  if (isAccepted) return;

  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}


noBtn.addEventListener("mouseover", moveNoButton);


noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  isAccepted = true;

  result.innerText = "YAYYYY 😭❤️ SHE SAID YESSSS!!! 🎉💘";


  noBtn.style.display = "none";

  // Confetti effect
  startConfetti();
});


const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  heart.style.opacity = Math.random();

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);


const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiPieces = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);

function createConfetti() {
  confettiPieces = [];

  for (let i = 0; i < 200; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 8 + 4,
      speed: Math.random() * 4 + 2,
      angle: Math.random() * 360,
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confettiPieces.forEach((p) => {
    ctx.beginPath();
    ctx.rect(p.x, p.y, p.size, p.size);
    ctx.fillStyle = `hsl(${p.angle}, 100%, 50%)`;
    ctx.fill();
  });
}

function updateConfetti() {
  confettiPieces.forEach((p) => {
    p.y += p.speed;
    if (p.y > canvas.height) {
      p.y = -10;
    }
  });
}

function animateConfetti() {
  if (!isAccepted) return;

  drawConfetti();
  updateConfetti();
  requestAnimationFrame(animateConfetti);
}

function startConfetti() {
  createConfetti();
  animateConfetti();

  
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 5000);
}
