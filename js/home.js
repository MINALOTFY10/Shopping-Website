set(localStorage.getItem("color") || "#e8eae3");
function set(color){
    document.documentElement.style.setProperty("--main-color",color);
}
