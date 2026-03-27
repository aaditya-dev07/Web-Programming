function calc() {
    var p = parseFloat(document.getElementById("p").value);
    var r = parseFloat(document.getElementById("r").value);
    var t = parseFloat(document.getElementById("t").value);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        alert("Enter valid values");
        return;
    }

    var si = (p * r * t) / 100;

    document.getElementById("o").innerHTML = "Simple Interest = " + si;
}
