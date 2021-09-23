const modalBtns = document.querySelectorAll(".more");
const modal = document.querySelector(".modal");

modalBtns.forEach((modalBtn) => {
    modalBtn.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });
});

modal.addEventListener("click", (evt) => {
    const target = evt.target;

    if (target.classList.contains("overlay") || target.classList.contains("modal__close")) {
        modal.classList.add("hidden");
    };
});