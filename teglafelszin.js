function szamol() {
    var aoldal = parseInt(document.getElementById("aoldal").value);
    var boldal = parseInt(document.getElementById("boldal").value);
    var coldal = parseInt(document.getElementById("coldal").value);

    var teglafelszin = (aoldal * boldal + boldal * coldal + aoldal * coldal) * 2;
    document.getElementById('teglafelszin').value = teglafelszin.toLocaleString() + " cm2";
}