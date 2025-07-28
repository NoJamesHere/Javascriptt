
function clicked() {
    const texty = document.getElementById("texty");

    texty.classList.add("animate");
    setTimeout(() => {
        texty.classList.remove("animate");

    }, 800);
}