function szamol() {
    var r = parseInt(document.getElementById("r").value);

    var korkerulet = r * 2 * 3.14;
    document.getElementById('korkerulet').value = korkerulet.toLocaleString() + " cm";
}