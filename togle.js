const lightmodebtn = document.querySelector(".lightmodebtn");
const darkmodebtn = document.querySelector(".darkmodebtn");

lightmodebtn.addEventListener("click",setlightmode);
darkmodebtn.addEventListener("click",setdarkmode);

function setdarkmode(){
    setUserTheme("dark");
}

function setlightmode(){
    setUserTheme("light");
}

function setUserTheme(newTheme){
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
}