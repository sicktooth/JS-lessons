// var n = Math.random ();
// n = n * 6;
// n = Math.floor(n) + 1;
// console.log (n);

prompt ("Your name");
prompt ("Your crush's name");
function lovePercentage () {
    var m = Math.random ();
    m = m * 100;
    m = Math.floor(m) + 1;
    if (m <= 30) {
        return ("Your love score is " + m + "% dont put much pressure just forget about it and build thy self");
    } 
    if (m > 30 && m === 70) {
        return ("Your love score is " + m + "%. Goodluck on that.");
    }
    if (m > 70) {
        return ("Your love score is " + m + "%. Lucky you, you guys are a match!");
    }
    // return "Your love score is " + m;
}
alert (lovePercentage());
