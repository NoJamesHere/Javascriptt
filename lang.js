const translations = {
    en: {
        mainTitle: "Welcome to my small web projects!",
        mainDesc: "Here you can find some of my small web projects I made to learn more about web development!",
        proj1Link: "Project 1",
        proj1Desc: "A simple page with some javascript animations.",
        proj2Link: "Project 2",
        proj2Desc: "About me page.",
        proj3Link: "Project 3",
        proj3Desc: "Some button designs.",
        proj4Link: "Project 4",
        proj4Desc: "A javascript game inspired by the infamous \"snake\" game.",
        proj5Link: "Project 5",
        proj5Desc: "I don't know yet!",
        footerText: "&copy; 2025 NoJamesHere &mdash; <a href=\"https://github.com/NoJamesHere\" target=\"_blank\" id=\"github-link\">GitHub</a>"
    },
    de: {
        mainTitle: "Willkommen zu meinen kleinen Webprojekten!",
        mainDesc: "Hier findest du einige meiner kleinen Webprojekte, die ich gemacht habe, um mehr über Webentwicklung zu lernen!",
        proj1Link: "Projekt 1",
        proj1Desc: "Eine einfache Seite mit einigen JavaScript-Animationen.",
        proj2Link: "Projekt 2",
        proj2Desc: "Über mich Seite.",
        proj3Link: "Projekt 3",
        proj3Desc: "Einige Button-Designs.",
        proj4Link: "Projekt 4",
        proj4Desc: "Ein JavaScript-Spiel inspiriert vom berühmten \"Snake\"-Spiel.",
        proj5Link: "Projekt 5",
        proj5Desc: "Ich weiß es noch nicht!",
        footerText: "&copy; 2025 NoJamesHere &mdash; <a href=\"https://github.com/NoJamesHere\" target=\"_blank\" id=\"github-link\">GitHub</a>"
    },
    ru: {
        mainTitle: "Добро пожаловать на мои небольшие веб-проекты!",
        mainDesc: "Здесь вы найдете некоторые из моих небольших веб-проектов, которые я сделал, чтобы узнать больше о веб-разработке!",
        proj1Link: "Проект 1",
        proj1Desc: "Простая страница с анимациями на JavaScript.",
        proj2Link: "Проект 2",
        proj2Desc: "Страница обо мне.",
        proj3Link: "Проект 3",
        proj3Desc: "Несколько дизайнов кнопок.",
        proj4Link: "Проект 4",
        proj4Desc: "Игра на JavaScript, вдохновленная знаменитой игрой \"Змейка\".",
        proj5Link: "Проект 5",
        proj5Desc: "Niet!",
        footerText: "&copy; 2025 NoJamesHere &mdash; <a href=\"https://github.com/NoJamesHere\" target=\"_blank\" id=\"github-link\">GitHub</a>"
    }
};

document.getElementById('lang-select').addEventListener('change', function() {
    const lang = this.value;
    document.getElementById('main-title').textContent = translations[lang].mainTitle;
    document.getElementById('main-desc').textContent = translations[lang].mainDesc;
    
    // Project lists
    document.getElementById('proj1-link').textContent = translations[lang].proj1Link;
    document.getElementById('proj1-desc').textContent = translations[lang].proj1Desc;
    document.getElementById('proj2-link').textContent = translations[lang].proj2Link;
    document.getElementById('proj2-desc').textContent = translations[lang].proj2Desc;
    document.getElementById('proj3-link').textContent = translations[lang].proj3Link;
    document.getElementById('proj3-desc').textContent = translations[lang].proj3Desc;
    document.getElementById('proj4-link').textContent = translations[lang].proj4Link;
    document.getElementById('proj4-desc').textContent = translations[lang].proj4Desc;
    document.getElementById('proj5-link').textContent = translations[lang].proj5Link;
    document.getElementById('proj5-desc').textContent = translations[lang].proj5Desc;
    
    // Footer
    document.getElementById('footer-text').innerHTML = translations[lang].footerText;
});