function szamol() {
    var alap = parseInt(document.getElementById("alap").value);
    var magassag = parseInt(document.getElementById("magassag").value);

    var haromszogterulet = (alap * magassag) % 2;
    document.getElementById("harmszogterulet").value = haromszogterulet.toLocaleString() + " cm2";
}