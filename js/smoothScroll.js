const linksHead = document.querySelectorAll(".menu-list__link");
const mainScroll = document.querySelector(".main__scroll");
const newArray = [...linksHead, mainScroll];

newArray.forEach(link => {
    link.addEventListener("click", (evt) => {
        evt.preventDefault();
        const id = evt.target.getAttribute("href").substr(1);
        document.getElementById(id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});