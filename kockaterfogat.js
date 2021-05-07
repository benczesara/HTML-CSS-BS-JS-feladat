function szamol() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);

    var kockaterfogat = a * b * c;
    document.getElementById('kockaterfogat').value = kockaterfogat.toLocaleString() + " cm3";
}