const params = new URLSearchParams(window.location.search);
const name = params.get("name");

const message = document.getElementById("message");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

if (name) {
  message.innerText = `${name}, will you be my Valentine? ❤️`;
}

yesBtn.addEventListener("click", () => {
  result.innerText = "YAYYYY 😭❤️ SHE SAID YESSSS!!! 🎉💘";
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

});
noBtn.addEventListener("touchstart", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
