
function clicked() {
    const texty = document.getElementById("texty");

    texty.classList.add("animate");
    setTimeout(() => {
        texty.classList.remove("animate");

    }, 800);
}

function something() {
    let x = Math.random() * 90; // keep within bounds
    let y = Math.random() * 90;
    const divy = document.getElementById("Circle");

    divy.style.left = x + "%";
    divy.style.top = y + "%";
    divy.classList.add("animatecircle"); 
    setTimeout(() => {
        
        divy.classList.remove("animatecircle");
    }, 800);
}