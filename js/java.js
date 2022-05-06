function display() {
    document.write("<table border='2'>");
    for (var i = 0; i < 2; i++) {
        document.write("<tr>");
        for (var j = 0; j < 2; j++) {
            document.write("<td>");
            document.write(i);
            document.write(j);
            document.write("</td>");
        }
        document.write("</td>");
    }
    document.write("</table>");
    document.bgColor = "red";

}
function ds(color1) {
    document.getElementById("background").background.Color = "color1";
}
function change() {
    var i = document.getElementById("nw").value;
    var j = document.getElementById("nh").value;
    document.ig.widht = i;
    document.ig.height = j;
}
function valid() {
    var x = true;
    var name1 = document.getElementById("name").value;
    var pass1 = document.getElementById("pass").value;
    if (name1 == "") {
        alert("name is empty");
        document.j.name.focus();
    }
}
function add() {
    var x = Number(document.h5.num1.value);
    var y = Number(document.h5.num2.value);
    var b = x + y;
    document.h5.h4.value = b;
}
function sub() {
    var x = Number(document.h5.num1.value);
    var y = Number(document.h5.num2.value);
    var b = x - y;
    document.h5.h4.value = b;
}
function mul() {
    var x = Number(document.h5.num1.value);
    var y = Number(document.h5.num2.value);
    var b = x * y;
    document.h5.h4.value = b;
}
function div() {
    var x = Number(document.h5.num1.value);
    var y = Number(document.h5.num2.value);
    var b = x / y;
    document.h5.h4.value = b;
}
function mod() {
    var x = Number(document.h5.num1.value);
    var y = Number(document.h5.num2.value);
    var b = x % y;
    document.h5.h4.value = b;
}