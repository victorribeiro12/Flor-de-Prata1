document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-image");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentIndex = 0;
    let autoSlide;

    // Função para mostrar imagem pelo índice
    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove("active");
            img.style.display = "none"; // esconde todas
        });
        images[index].classList.add("active");
        images[index].style.display = "block"; // mostra só a atual
    }

    // Próxima imagem
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Imagem anterior
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    // Evento botões
    nextBtn.addEventListener("click", () => {
        nextImage();
        resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        prevImage();
        resetAutoSlide();
    });

    // Iniciar slide automático
    function startAutoSlide() {
        autoSlide = setInterval(nextImage, 4000); // troca a cada 3s
    }

    // Resetar auto slide após clique
    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    // Inicialização
    showImage(currentIndex);
    startAutoSlide();
});
