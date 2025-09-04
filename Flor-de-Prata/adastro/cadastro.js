function togglePasswordVisibility() {
  const senhaInput = document.getElementById("senha");
  const icon = document.querySelector(".password-toggle-icon");

  if (senhaInput.type === "password") {
    senhaInput.type = "text";
    icon.textContent = "💍";
  } else {
    senhaInput.type = "password";
    icon.textContent = "🔒"; 
  }
}
