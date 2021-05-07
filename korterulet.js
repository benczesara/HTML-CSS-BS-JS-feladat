function szamol() {
    var sugar = parseInt(document.getElementById("sugar").value);

    var korterulet = sugar * sugar * 3.14;
    document.getElementById('korterulet').value = korterulet.toLocaleString() + " cm2";
}