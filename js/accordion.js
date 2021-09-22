const btns = document.querySelectorAll(".feature__link");
const lists = document.querySelectorAll(".feature-sub");

btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        btns.forEach((btnItem, idx) => {
            if (btn === btnItem) {
                btnItem.classList.toggle("feature__link_active");
                lists[idx].classList.toggle("hidden");
            } else {
                btnItem.classList.remove("feature__link_active");
                lists[idx].classList.add("hidden");
            };
        });
    });
});