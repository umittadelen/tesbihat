window.addEventListener("load", () => {
    document.body.classList.add("show");
});

document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    e.preventDefault();
    const url = link.getAttribute("href");

    document.body.classList.remove("show");
    document.body.classList.add("hide");

    setTimeout(() => {
        window.location.href = url;
    }, 400);
});

const box = document.getElementById("geri");

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const pageHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;

    const margin = 50;
    const position = pageHeight - box.offsetHeight - (pageHeight - windowHeight - scroll) - margin;

    box.style.top = position + "px";
});