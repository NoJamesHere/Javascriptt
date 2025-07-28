
function clicked() {
    const texty = document.getElementById("texty");
    let text = texty.textContent;
    texty.textContent = "You clicked the button!"
    texty.classList.add("animate");
    setTimeout(() => {
        texty.textContent = text;
        texty.classList.remove("animate");

    }, 800);
}