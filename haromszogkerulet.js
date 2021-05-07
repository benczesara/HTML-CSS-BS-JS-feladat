function szamol() {
    var aoldal = parseInt(document.getElementById("aoldal").value);
    var boldal = parseInt(document.getElementById("boldal").value);
    var coldal = parseInt(document.getElementById("coldal").value);

    var haromszogkerulet = aoldal + boldal + coldal;
    document.getElementById('haromszogkerulet').value = haromszogkerulet.toLocaleString() + " cm";
}