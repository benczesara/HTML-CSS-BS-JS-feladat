function szamol() {
    var aoldal = parseInt(document.getElementById("aoldal").value);
    var boldal = parseInt(document.getElementById("boldal").value);
    var coldal = parseInt(document.getElementById("coldal").value);

    var kockafelszin = (aoldal * boldal + boldal * coldal + aoldal * coldal) * 2;
    document.getElementById('kockafelszin').value = kockafelszin.toLocaleString() + " cm2";
}