const container = document.getElementById("ballsdiv");

container.addEventListener("click", function(event) {
    ballsSpawn(event);
});



function gravity(ball) {
    let top = parseInt(ball.style.top); // get numeric value of "top"
    const containerHeight = container.clientHeight;
    let velocity = 2;
    let gravityacc = 0.5;


    function fall() {
        velocity += gravityacc;
        top += velocity; // fall speed
        if (top > containerHeight - ball.offsetHeight) {
            top = containerHeight - ball.offsetHeight;
            velocity *= -0.6;

        }
        ball.style.top = top + "px";
        requestAnimationFrame(fall); // keep falling
    }
    fall();
}


function ballsSpawn(event){
    let colors = ["#5ec49fff", "#8cff44ff", "#ff4141ff", "#ffe562ff","#a45affff", "#ff7458ff", "#68e877ff", "#ff7bdeff"];
    const idk = document.createElement("div");
    idk.classList.add("ball");

    idk.style.position = "absolute";
    idk.style.border = `2px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
    let randomSize = Math.random() * (120 - 25) + 25 + "px";

    idk.style.width = randomSize;
    idk.style.height = randomSize;
    // get mouse coords relative to container
    const rect = container.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // set ball position
    idk.style.left = mouseX - 25 +  "px";
    idk.style.top = mouseY - 25 +  "px";

    container.appendChild(idk); 
    gravity(idk);
}


clear.onclick = () => {
    while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
}