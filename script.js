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