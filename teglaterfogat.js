function szamol() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);

    var teglaterfogat = a * b * c;
    document.getElementById('teglaterfogat').value = teglaterfogat.toLocaleString() + " cm3";
}