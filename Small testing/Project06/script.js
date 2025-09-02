const header = document.getElementById("header");
const paragraph = document.getElementById("paragraph");
const background = document.getElementById("background");
const imageslider = document.getElementById("imageslider");
const colors = {
  dark: {
    header_color: "#7867b6ff",
    paragraph_color: "#827acbff",
    background_color: "#2c2c4eff",
    imageslider: "moonDarkMode.png",
  },
  light: {
    header_color: "#342a48ff",
    paragraph_color: "#433e60ff",
    background_color: "#c5c1ffff",
    imageslider: "sunLightMode.png",
  },
};

function changeTheme(theme) {
  header.style.color = colors[theme].header_color;
  paragraph.style.color = colors[theme].paragraph_color;
  background.style.backgroundColor = colors[theme].background_color;
  imageslider.src = colors[theme].imageslider;
}

changeTheme("light");

document
  .getElementById("dark-mode-toggle")
  .addEventListener("change", function () {
    const lang = document.getElementById("dark-mode-toggle").checked;
    let theme = "light";
    if (lang) {
      theme = "dark";
    } else theme = "light";

    changeTheme(theme);
  });
