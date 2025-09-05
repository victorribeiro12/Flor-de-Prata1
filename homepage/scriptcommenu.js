document.addEventListener("DOMContentLoaded", () => {
  // 1. Seletores de Elementos
  const menuBtn = document.getElementById("menu-btn");
  const sideMenu = document.getElementById("side-menu");
  const closeMenuBtn = document.getElementById("close-menu-btn");
  const menuBackdrop = document.getElementById("menu-backdrop");
  const carousel = document.getElementById("carousel");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const searchInput = document.getElementById("search-input");
  const cartBtn = document.getElementById("cart-btn");
  const profileBtn = document.getElementById("profile-btn");
  const profileModal = document.getElementById("profile-modal");
  const cartModal = document.getElementById("cart-modal");
  const products = document.querySelectorAll(".offer-item");
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("senha");

  // 2. Funções de Controle
  const closeAll = () => {
    if (sideMenu) sideMenu.classList.remove("open");
    if (profileModal) profileModal.classList.add("hidden");
    if (cartModal) cartModal.classList.add("hidden");
    if (menuBackdrop) menuBackdrop.classList.remove("open");
  };

  let currentIndex = 0;
  const images = document.querySelectorAll(".carousel-image");
  const totalImages = images.length;

  const updateCarousel = () => {
    if (carousel) {
      carousel.scrollTo({
        left: carousel.clientWidth * currentIndex,
        behavior: "smooth",
      });
    }
  };

  const searchProducts = () => {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === "") {
      products.forEach((product) => {
        product.style.display = "block";
      });
      document.querySelector(".carousel-section").style.display = "block";
      document.querySelector(".categories-section").style.display = "block";
      const searchPlaceholder = document.querySelector(".search-placeholder");
      if (searchPlaceholder) {
        searchPlaceholder.remove();
      }
      return;
    }

    products.forEach((product) => {
      const name = product.querySelector(".name").textContent.toLowerCase();
      product.style.display = name.includes(searchTerm) ? "block" : "none";
    });
  };
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      closeAll();
      if (sideMenu) sideMenu.classList.add("open");
      if (menuBackdrop) menuBackdrop.classList.add("open");
    });
  }

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", closeAll);
  }

  if (profileBtn) {
    profileBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      if (profileModal.classList.contains("hidden")) {
        closeAll();
        profileModal.classList.remove("hidden");
        if (menuBackdrop) menuBackdrop.classList.add("open");
      } else {
        closeAll();
      }
    });
  }

  if (cartBtn) {
    cartBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      if (cartModal.classList.contains("hidden")) {
        closeAll();
        cartModal.classList.remove("hidden");
        if (menuBackdrop) menuBackdrop.classList.add("open");
      } else {
        closeAll();
      }
    });
  }

  if (menuBackdrop) {
    menuBackdrop.addEventListener("click", closeAll);
  }

  if (carousel && nextBtn && prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : totalImages - 1;
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = currentIndex < totalImages - 1 ? currentIndex + 1 : 0;
      updateCarousel();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", searchProducts);
  }

  window.addEventListener("click", (e) => {
    if (
      !profileModal.contains(e.target) &&
      !profileBtn.contains(e.target) &&
      !cartModal.contains(e.target) &&
      !cartBtn.contains(e.target)
    ) {
      closeAll();
    }
  });

  if (togglePassword && passwordInput) {
    const pathClosed = document.getElementById("path-closed");
    const pathOpen = document.getElementById("path-open");

    togglePassword.addEventListener("click", () => {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        pathClosed.style.display = "none";
        pathOpen.style.display = "block";
      } else {
        passwordInput.type = "password";
        pathClosed.style.display = "block";
        pathOpen.style.display = "none";
      }
    });
  }
});
