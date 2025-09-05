
const modal = document.getElementById("loginModal");
const openBtn = document.getElementById("openLogin");
const closeBtn = document.getElementById("closeModal");


openBtn.onclick = () => {
  modal.style.display = "block";
};


closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
