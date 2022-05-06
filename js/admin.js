function change() {
    var color = document.getElementById("c").value;
    document.bgColor = color;
    localStorage.setItem("color", color);
   set(localStorage.getItem("color"));
}
