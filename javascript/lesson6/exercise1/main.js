
function temps() {
    var d = new Date();
    var e = d.getHours();
    var n = d.getDate();
    document.getElementById("horloge").innerHTML = n;
    document.getElementById("horloge").innerHTML = e;
    document.getElementById("horloge").innerHTML = d;
    setInterval(temps, 1000);
}

temps();
