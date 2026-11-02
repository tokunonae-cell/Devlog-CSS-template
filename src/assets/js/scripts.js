const modeChange = document.querySelector('#mode');

modeChange.addEventListener('click', (event) => {
    const theme = document.documentElement.getAttribute("data-theme");
    if(theme === "dark"){
        document.documentElement.setAttribute("data-theme", "light");
        document.getElementById("icon").src = "../../assets/svgs/sun.svg";
        document.getElementById("icon").setAttribute("alt", "light");
    }
    else if(theme === "light"){
        document.documentElement.setAttribute("data-theme", "dark");
        document.getElementById("icon").src = "../../assets/svgs/moon.svg";
        document.getElementById("icon").setAttribute("alt", "dark");
    }
});