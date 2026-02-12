const generateBtn = document.getElementById("generateBtn");
const nameInput = document.getElementById("nameInput");
const linkBox = document.getElementById("linkBox");
const valLink = document.getElementById("valLink");
const copyBtn = document.getElementById("copyBtn");

generateBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Oga enter her name 😭❤️");
    return;
  }

  const link = `${window.location.origin}${window.location.pathname.replace("index.html", "")}valentine.html?name=${encodeURIComponent(name)}`;

  valLink.value = link;
  linkBox.style.display = "block";
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(valLink.value);
  copyBtn.innerText = "Copied! ✅";

  setTimeout(() => {
    copyBtn.innerText = "Copy Link";
  }, 2000);
});
