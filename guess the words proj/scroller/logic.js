const el = document.querySelector(".scroll-wrapper");

const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    let scrolltop = document.documentElement.scrollTop;
    el.style.width = `${(scrolltop / height) * 100}%`;
});
